addResponseRegex("picturesmode([ ]*([a-z|0-9]*[ ]*)*)", "Picturesmode([ ]*([a-z|0-9]*[ ]*)*)", "picmode([ ]*([a-z|0-9]*[ ]*)*)");
run("allutils.js");

function picturesModeResponse(message) {
    if (getResponsesDisabled()) {
        return false;
    }
    var folderNumber;
    DMessage(message, 0);
    var path = "images\\system\\tumblr";
    folderNumber = 1;
    if (message.search("liked") != -1 || message.search("3") != -1) {
        path = "images\\liked";
        folderNumber = 3;
    }
    else if (message.search("normal") != -1 || message.search("2") != -1) {
        path = "images\\normal";
        folderNumber = 2;
    }
    else if (message.search("loved") != -1 || message.search("4") != -1) {
        path = "images\\loved";
        folderNumber = 4;
    }
    if (message.search("untagged") != -1 || message.search("ut") != -1)
    {
        var x = "4";
        var currentFile = 0;
        var tagsFile = new getOrCreateFile(getAppPath() + path + "\\imagetags.txt");
        var folder = tagsFile.getParentFile();
        var folderImages = listFilesInFolder(folder);
        while (x != "5" && x != "quit" && x != "exit" && x != "q" && x != "e")
        {
            var extension = "";

            var i = folderImages[currentFile].getName().lastIndexOf('.');
            if (i > 0) {
                extension = folderImages[currentFile].getName().substring(i + 1);
            }
            if (!folderImages[currentFile].isDirectory() && (extension == "png" || extension == "jpg" || extension == "gif")) {
                if (getTags(tagsFile, folderImages[currentFile].getName()) == null) {
                    var thispath = path + "\\" + folderImages[currentFile].getName();
                    getLocalTeasePicture(path, folderImages[currentFile].getName());
                    answer = sendInput("Do you like this one? (Options: hate, ok, like, love, next (1,2,3,4,n))", 0);
                    //sendMessage("flag 47");
                    x = answer.getAnswer();
                    //sendMessage("flag 671");
                    while (x != "1" && x != "2" && x != "3" && x != "4" && x != "liked" && x != "normal" && x != "loved" && x != "hate" && x != "n" && x != "next" && x != "5" && x != "quit" && x != "exit" && x != "q" && x != "e") {
                        answer = sendInput("Invalid answer! (Options: hate, ok, like, love, next (1,2,3,4,n))", 0);
                        x = answer.getAnswer();
                    }
                }
            }
            currentFile++;
            if (currentFile >= folderImages.length) {
                DMessage("reached end of files", 0);
                break;
            }
            //sendMessage("flag 672");
        }
        return true;
    }

    var x = "4";
    while (x != "5" && x != "quit" && x!= "exit" && x!= "q" && x != "e")
    {
        //sendMessage("flag 67111",0);
        //THERE IS SOME BIZARRE TIMING ISSUE HERE. THIS FIXED IT. DO NOT REMOVE!
        sleep(.01);
        randomimage = getTeasePicture(folderNumber);
        var extension = "";

        var i = randomimage.getName().lastIndexOf('.');
        if (i > 0) {
            extension = randomimage.getName().substring(i + 1);
        }
        if ((extension == "png" || extension == "jpg" || extension == "gif")) {
            DMessage("path: " + getImagePath(), 0);
            answer = sendInput("Do you like this one? (Options: hate, ok, like, love, next (1,2,3,4,n))", 0);
            x = answer.getAnswer();
            while (x != "1" && x != "2" && x != "3" && x != "4" && x != "liked" && x != "normal" && x != "loved" && x != "hate" && x != "n" && x != "next" && x != "5" && x != "quit" && x != "exit" && x != "q" && x != "e") {
                answer = sendInput("Invalid answer! (Options: hate, ok, like, love, next (1,2,3,4,n))", 0);
                x = answer.getAnswer();
            }
            //sendMessage("flag 6713", 0);
        }
        //sendMessage("flag 6714",0);
    }
    return true;
}