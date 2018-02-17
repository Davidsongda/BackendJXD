package com.tails.common.ftpService;


import com.tails.common.utils.CommonUtil;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPReply;

import java.io.IOException;
import java.io.InputStream;

/**
 * Created by lenovo on 2017-6-6.
 */
public class FtpSerivce {

    //ftp 服务器地址
    public static String ftpHost = CommonUtil.getConfigPro("ftpHost");
    //ftp 服务用户名
    public static String ftpUserName = CommonUtil.getConfigPro("ftpUserName");
    //ftp 服务用户密码
    public static String ftpPassword = CommonUtil.getConfigPro("ftpPassword");
    //ftp 服务端口号
    public static int ftpPort = Integer.parseInt(CommonUtil.getConfigPro("ftpPort"));
    //ftp 文件上传路径
    public static String ftpFilePath = CommonUtil.getConfigPro("ftpFilePath");




    /**
     * Description: 向FTP服务器上传文件
     * @Version1.0  wanghui 创建
     * @param filename 上传到FTP服务器上的文件名
     * @param input 输入流
     * @return 成功返回true，否则返回false
     * @throws IOException
     */
    public static boolean uploadFile(String filename, InputStream input) throws IOException {
        boolean success = false;
        FTPClient ftp = new FTPClient();
        try {
            int reply;
            ftp.connect(ftpHost, ftpPort);//连接FTP服务器
            //如果采用默认端口，可以使用ftp.connect(url)的方式直接连接FTP服务器
            ftp.login(ftpUserName, ftpPassword);//登录
            reply = ftp.getReplyCode();
            if (!FTPReply.isPositiveCompletion(reply)) {
                ftp.disconnect();
                return success;
            }
            ftp.makeDirectory(ftpFilePath);
            ftp.changeWorkingDirectory(ftpFilePath);
            ftp.storeFile(filename, input);

            input.close();
            ftp.logout();
            success = true;
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (ftp.isConnected()) {
                try {
                    ftp.disconnect();
                } catch (IOException ioe) {
                }
            }
        }
        return success;
    }


}
