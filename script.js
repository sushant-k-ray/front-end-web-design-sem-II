'use strict';

function calculateBMI(height, weight)
{
    let BMI = (weight)/(height ** 2);
    return BMI;
}

function displayBMI()
{
    let height;
    let weight;
    let unitHeight = document.getElementById("height_unit");
    let unitWeight = document.getElementById("weight_unit");

    if(unitHeight.options[0].selected)
    {
        height = document.getElementById("height_cm").value;
        height = Number(height);
        if(!height)
        {
            alert("Please Enter a Valid Height");
            return;
        }

    }else{
        let feet = document.getElementById("height_ft").value;
        let inches = document.getElementById("height_in").value;

        height = Number(feet) * 30.48;
        height += Number(inches) * 2.54;

        if(!height)
        {
            alert("Please Enter a Valid Height");
            return;
        }
    }

    weight = document.getElementById("weight").value;
    weight = Number(weight);

    if(!weight)
    {
        alert("Please Enter a Valid Weight");
        return;
    }
    
    if(unitWeight.options[1].selected)
        weight *= 0.4536;

    height = height/100.0;    //height in metres
    let BMI = calculateBMI(height, weight);
    
    let background = document.getElementById("calc");

    const underWeightColor = [
        "hsl(200, 45%, 65%)",
        "hsl(200, 50%, 65%)",
        "hsl(200, 55%, 65%)",
        "hsl(200, 60%, 65%)",
        "hsl(200, 65%, 65%)",
        "hsl(200, 70%, 65%)",
        "hsl(200, 75%, 65%)",
        "hsl(200, 80%, 65%)",
        "hsl(200, 85%, 65%)",
    ];

    const normalWeightColor = "hsl(116, 42%, 65%)";

    const overWeightColor = [
        "hsl(0, 45%, 65%)",
        "hsl(0, 50%, 65%)",
        "hsl(0, 55%, 65%)",
        "hsl(0, 60%, 65%)",
        "hsl(0, 65%, 65%)",
        "hsl(0, 70%, 65%)",
        "hsl(0, 75%, 65%)",
        "hsl(0, 80%, 65%)",
        "hsl(0, 85%, 65%)",
    ];

    if(BMI <= 18.5)
    {
        let index = 18.5 - BMI;
        index %= 9;
        index = index.toFixed(0);
        background.style.backgroundColor = underWeightColor[index];

    }else if(BMI <= 24.9)
        background.style.backgroundColor = normalWeightColor;

    else{
        let index = 40 - BMI;
        if(index < 0)
            index = 0;

        index %= 9;
        index = index.toFixed(0);

        index = 8 - index;
        background.style.backgroundColor = overWeightColor[index];
    }

    let display = document.getElementById("bmi");
    display.innerHTML = BMI.toFixed(1);
    display.style.display = "block";

    document.getElementById("waiting").innerHTML = "Your BMI:";
}

function toggleHeightUnit()
{
    let unit = document.getElementById("height_unit");

    if(unit.options[0].selected)
    {
        document.getElementById("height_cm").style.display = "inline";
        document.getElementById("ft").style.display = "none";
    }else{
        document.getElementById("height_cm").style.display = "none";
        document.getElementById("ft").style.display = "inline";
    }
}

function toggleTOC()
{
    let toc = document.getElementById("toc-expanded");
    let display = toc.style.display;
    display = display ? display : "none";

    if(display == "none")
        toc.style.display = "block";

    else
        toc.style.display = "none";
}