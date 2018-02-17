package com.tails.common.utils;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

import java.io.InputStream;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by JiaoPeng on 2017/6/22.
 */
public class ImportExcelUtil {

    private final  static  String excel2003L=".xls";



    public List<List<Object>> getBankListByExcel(InputStream in, String fileName) throws Exception{

        List<List<Object>> list=null;
        Workbook work=this.getWorkBook(in,fileName);
        if(work==null){
            throw new Exception("创建Excel为空");
        }
        Sheet sheet=null;
        Row row=null;
        Cell cell=null;
        list=new ArrayList<List<Object>>();
        for(int i=0;i<work.getNumberOfSheets();i++){
            //EXCEL文件可能有多个sheet,但是存放数据的一般是sheet1,其他sheet例如码表可以不读去
            if(i!=0){
                break;
            }
            sheet=work.getSheetAt(i);
            if(sheet==null){
                continue;
            }
            for(int j=sheet.getFirstRowNum();j<=sheet.getLastRowNum();j++){
                row=sheet.getRow(j);
                if(row==null){
                    continue;
                }
                List<Object> li=new ArrayList<Object>();
                for(int y=row.getFirstCellNum();y<=row.getLastCellNum();y++){
                    cell=row.getCell(y);
                    Object o=this.getCellValue(cell);
                    li.add(o);
                }
                list.add(li);
            }
        }
        work.close();
        return list;
    }

    public Workbook getWorkBook(InputStream inStr, String fileName) throws Exception{

        String fileType=fileName.substring(fileName.lastIndexOf("."));
        Workbook  wb= new HSSFWorkbook(inStr);
        return wb;
    }

    public Object getCellValue(Cell cell){

        Object value=null;
        if(cell==null){
            value="";
            return value;
        }
        DecimalFormat df = new DecimalFormat("0");
        SimpleDateFormat sdf = new SimpleDateFormat("yyy-MM-dd");
        DecimalFormat df2 = new DecimalFormat("0.00");
        switch (cell.getCellType()){
            case Cell.CELL_TYPE_STRING:
                value = cell.getRichStringCellValue().getString();
                break;
            case Cell.CELL_TYPE_NUMERIC:
                if("General".equals(cell.getCellStyle().getDataFormatString())){
                    value = df.format(cell.getNumericCellValue());
                }else if("m/d/yy".equals(cell.getCellStyle().getDataFormatString())){
                    value = sdf.format(cell.getDateCellValue());
                }else {
                    value=df2.format(cell.getNumericCellValue());
                }
                break;
            case Cell.CELL_TYPE_BOOLEAN:
                value=cell.getBooleanCellValue();
                break;
            case Cell.CELL_TYPE_BLANK:
                value="";
                break;
            default:
                break;
        }
        return value;
    }
}
