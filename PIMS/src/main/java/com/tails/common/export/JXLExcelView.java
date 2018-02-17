package com.tails.common.export;

import jxl.Workbook;
import jxl.WorkbookSettings;
import jxl.format.Alignment;
import jxl.format.VerticalAlignment;
import jxl.write.*;
import jxl.write.biff.RowsExceededException;
import org.apache.commons.beanutils.PropertyUtils;
import org.springframework.web.servlet.view.document.AbstractJExcelView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.List;
import java.util.Map;

/**
 * Created by LiYabing on 2016/7/17.
 */
public class JXLExcelView extends AbstractJExcelView {
    
    @Override
    public void buildExcelDocument(Map<String, Object> map,
                                   WritableWorkbook work, HttpServletRequest req,
                                   HttpServletResponse response) {
        String[] titles = (String[]) map.get("titles");
        String[] columnNames = (String[]) map.get("columnNames");
        String[] dbColumnNames = (String[]) map.get("dbColumnNames");
        Integer[] columnWidths = (Integer[]) map.get("columnWidths");
        String excelNameF = (String) map.get("excelName");
        if (null != titles && titles.length > 0) {
            columnNames = titles;
        }
        String[] columns = (String[]) map.get("columns");
        if (null != columns && columns.length > 0) {
            dbColumnNames = columns;
        }

        OutputStream os = null;
        try {

            String excelName = excelNameF + ".xls";
            // 设置response方式,使执行此controller时候自动出现下载页面,而非直接使用excel打开
            response.setContentType("APPLICATION/OCTET-STREAM");
            response.setHeader("Content-Disposition", "attachment; filename="
                    + URLEncoder.encode(excelName, "UTF-8"));
            os = response.getOutputStream();
            // sheet名称
            String sheetName = excelNameF;

            // 全局设置
            WorkbookSettings setting = new WorkbookSettings();
            java.util.Locale locale = new java.util.Locale("zh", "CN");
            setting.setLocale(locale);
            setting.setEncoding("ISO-8859-1");
            // 创建工作薄
            work = Workbook.createWorkbook(os); // 建立excel文件
            // 创建第一个工作表
            WritableSheet ws = work.createSheet(sheetName, 1); // sheet名称
            // 添加标题
            addColumNameToWsheet(ws, map);

            List list = (List) map.get("list");
            writeContext(ws, list, map);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {

            // 写入文件
            try {
                work.write();
                work.close();
                os.flush();
                os.close();
            } catch (WriteException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }

        }

    }

    private <T> void writeContext(WritableSheet wsheet, List<T> list,Map<String, Object> map) {

        String[] columnNames = (String[]) map.get("columnNames");
        String[] dbColumnNames = (String[]) map.get("dbColumnNames");
        Integer[] columnWidths = (Integer[]) map.get("columnWidths");
        String excelNameF = (String) map.get("excelName");

        int rows = list.size();
        Label wlabel = null;
        WritableCellFormat wcf = getFormat();
        int cols = dbColumnNames.length;
        String columnName = null;
        Object value = null;
        Object valueS = null;
        try {
            for (int i = 0; i < rows; i++) {
                T t = (T) list.get(i);
                for (int j = 0; j < cols; j++) {
                    columnName = dbColumnNames[j];
                    value = PropertyUtils.getProperty(t, columnName);
                    valueS = (null != value)? value : " ";
                    if("EMP_GENDER"==columnName || "sex"==columnName){
                        if (valueS.equals(1)){
                            valueS="男";
                        }else{
                            valueS="女";
                        }
                    }
                    wlabel = new Label(j, (i + 1), valueS + "", wcf);
                    wlabel = new Label(j, (i + 1), valueS + "");
                    wsheet.addCell(wlabel);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    // 添加标题样式
    private void addColumNameToWsheet(WritableSheet wsheet, Map<String, Object> map)
            throws RowsExceededException, WriteException {

        String[] columnNames = (String[]) map.get("columnNames");
        String[] dbColumnNames = (String[]) map.get("dbColumnNames");
        Integer[] columnWidths = (Integer[]) map.get("columnWidths");
        String excelNameF = (String) map.get("excelName");

        // 设置excel标题
        WritableFont wfont = getFont();
        if (null == wfont) {
            wfont = new WritableFont(WritableFont.ARIAL,
                    WritableFont.DEFAULT_POINT_SIZE, WritableFont.BOLD);

        }
        WritableCellFormat wcfFC = getFormat();
        if (null == wcfFC) {
            wcfFC = new WritableCellFormat(wfont);
            try {
                wcfFC.setWrap(true);// 自动换行
                wcfFC.setAlignment(Alignment.CENTRE);
                wcfFC.setVerticalAlignment(VerticalAlignment.CENTRE);// 设置对齐方式
            } catch (WriteException e) {
                e.printStackTrace();
            }
        }
        Label wlabel1 = null;
        String[] columNames = columnNames;
        if (null == columNames)
            return;
        int colSize = columNames.length;

        Integer[] colsWidth = columnWidths;
        if (null == colsWidth) {
            colsWidth = new Integer[colSize];
            for (int i = 0; i < colSize; i++) {
                colsWidth[i] = 20;
            }
        }

        int temp = 0;
        String colName = null;
        for (int i = 0; i < colSize; i++) {
            colName = columNames[i];
            if (null == colName || "".equals(colName))
                colName = "";
            wlabel1 = new Label(i, 0, colName, wcfFC);
            wsheet.addCell(wlabel1);
            temp = colsWidth[i].intValue();
            // 默认设置列宽
            temp = temp == 0 ? 20 : temp;
            wsheet.setColumnView(i, temp);
        }

    }

    // 设置格式
    private WritableCellFormat getFormat() {

        WritableFont wfont = getFont();
        WritableCellFormat wcfFC = new WritableCellFormat(
                wfont);
        try {
            wcfFC.setWrap(true);
            wcfFC.setAlignment(Alignment.CENTRE);
            wcfFC.setVerticalAlignment(VerticalAlignment.CENTRE);
        } catch (WriteException e) {
            e.printStackTrace();
        }
        return wcfFC;
    }

    // 设置字体
    private WritableFont getFont() {
        return new WritableFont(WritableFont.ARIAL,
                WritableFont.DEFAULT_POINT_SIZE, WritableFont.BOLD);
    }

}
