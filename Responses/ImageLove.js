addResponseIndicator("love it", "it's amazing", "its hot", "4", "awesome", "fuck");
run("utils.js");

function imageLoveResponse(message) {
    if (getImageUrl() != null || getImagePath() != null)
    {
        /*if (java.nio.file.Files.move(java.nio.file.Paths.get("C:\\Desktop\\Test\\TeaseAIJava2\\tumblr_o9pi96pxXN1v0oj9oo1_400.gif"), java.nio.file.Paths.get("C:\\Desktop\\Test\\tumblr_o9pi96pxXN1v0oj9oo1_400.gif")) == null)
        {
            sendMessage("failed")
        }*/
        var z = getImagePath();
        z = "" + z;
        var x = z.split("\\");
        var fileName = x[x.length - 1];
        moveFile("C:\\Users\\tyler\\Desktop\\test\\teaseaijava2\\" + getImagePath(), "C:\\Users\\tyler\\Desktop\\test\\teaseaijava2\\images\\loved\\" + fileName);
        //sendMessage("complete");
    }
    return true;
}