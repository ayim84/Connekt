var objectArray = [];

function sortArray(array)
{
    var topToBottomArray = [...array].sort(function(a,b)
    {
        if(a.topLeftY > b.topLeftY)
        {
            return -1;
        }
        
        if(a.topLeftY < b.topLeftY)
        {
            return 1;
        }
    });

    console.log("Top to Bottom", topToBottomArray);
    arrayToHTML(topToBottomArray, "#topToBottom");

    var leftToRightArray = [...array].sort(function(a,b)
    {
        if(a.topLeftX > b.topLeftX)
        {
            return 1;
        }
        
        if(a.topLeftX < b.topLeftX)
        {
            return -1;
        }
    });

    console.log("Left to Right", leftToRightArray);
    arrayToHTML(leftToRightArray, "#leftToRight");


    for (var i = 0; i < array.length; i++)
    {
        array[i].size = array[i].height * array[i].width;
    }

    var sizeArray = [...array];

    for (var i = 0; i < sizeArray.length; i++)
    {
        sizeArray[i].size = sizeArray[i].height * sizeArray[i].width;
    }

    sizeArray.sort(function(a,b)
    {
        if(a.size > b.size)
        {
            return -1;
        }
        
        if(a.size < b.size)
        {
            return 1;
        }
    });

    console.log("Big to Small", sizeArray);
    arrayToHTML(sizeArray, "#bigToSmall");

}

function arrayToHTML(array, id)
{
    var sortedArray = $("<ul>");
    
    for(var i = 0; i < array.length; i++)
    {
        sortedArray.append("<li>ID: " + array[i].id + "</li>");
    }

    $(id).html(sortedArray);
}

$("#add").on("click", function(event)
{
    event.preventDefault();

    var idFound = false;
    var newObject = 
    {
        id: parseInt($("#id").val()),
        topLeftX: parseInt($("#topLeftX").val()),
        topLeftY: parseInt($("#topLeftY").val()),
        height: parseInt($("#height").val()),
        width: parseInt($("#width").val())
    };

    for(var i = 0; i < objectArray.length; i++)
    {
        if($("#id").val() == objectArray[i].id)
        {
            idFound = true;
        }
    }

    if(idFound == true)
    {
        alert("ID already exists.  Please try different ID.");
    }
    else
    {
        objectArray.push(newObject);
        $("form :input").val("");
        sortArray(objectArray);

        var size = newObject.height * newObject.width;
        var newObjectHTML = $("<ul>");
        newObjectHTML.append("<li>ID: " + newObject.id + "</li>");
        newObjectHTML.append("<li>Top Left X: " + newObject.topLeftX + "</li>");
        newObjectHTML.append("<li>Top Left Y: " + newObject.topLeftY + "</li>");
        newObjectHTML.append("<li>Height: " + newObject.height + "</li>");
        newObjectHTML.append("<li>Width: " + newObject.width + "</li>");
        newObjectHTML.append("<li>Size: " + size + "</li>");

        $("#objectArray").append(newObjectHTML);
    }
})