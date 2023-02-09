function topic() {
    var topic = document.getElementById("topics").value;
    if(topic=="Select the topic") {
        alert("Please select a valid topic");
    }else {
        if(topic=="Area") {
            document.getElementById("topic").innerHTML = "<select id='subtopics_area'><option selected disabled>Select</option><option>Triangle</option><option>Square</option><option>Circle</option></select><button id='select' onClick='subtopic_area()'>Ok</button>";
        }else if(topic=="Volume") {
            document.getElementById("topic").innerHTML = "<select id='subtopics_volume'><option selected disabled>Select</option><option>Cylinder</option><option>Sphere</option><option>Cylinder</option></select><button id='select' onClick='subtopic_volume()'>Ok</button>"
        }else if(topic=="Perimeter") {
            document.getElementById("topic").innerHTML = "<select id='subtopics_peri'><option selected disabled>Select</option><option>Triangle</option><option>Square</option><option>Circle</option></select><button id='select' onClick='subtopic_peri()'>Ok</button>";
        }
    }
}

function subtopic_area() {
    var subtopic = document.getElementById("subtopics_area").value;
    if(subtopic=="Triangle") {
        document.getElementById("calc").innerHTML = "<section id='field'><p class='head'>Area (Triangle) in cm</p><select id='area_targets' class='targets'><option disabled>Select target</option><option selected>Area</option><option>Base</option><option>Height</option></select><button id='confirm_tar' onclick='target_selected()'>Confirm</button><br><span id='area_fir_val' class='area_val'>Base: </span><input type='text' id='firinput' class='input'><br><span id='area_sec_val' class='area_val'>Height: </span><input type='text' id='secinput' class='input'><br><span><button onclick='evaluate_area_tri()' id='eval'>Calculate</button></span><br><div id='results'></div></section>";     
    }
}
function target_selected() {
    var target = document.getElementById("area_targets").value;
    if(target=="Area") {
        document.getElementById("area_fir_val").innerHTML = " Base: ";
        document.getElementById("area_sec_val").innerHTML = " Height: ";
    }else if(target=="Base") {
        document.getElementById("area_fir_val").innerHTML = " Area: ";
        document.getElementById("area_sec_val").innerHTML = " Height: ";
    }else {
        document.getElementById("area_fir_val").innerHTML = " Area: ";
        document.getElementById("area_sec_val").innerHTML = " Base: ";
    }
}
function evaluate_area_tri() {
    var target = document.getElementById("area_targets").value;
    if(target=="Area") {
        var base = document.getElementById("firinput").value;
        var height = document.getElementById("secinput").value;
        if ((base != "" && height != "") && base != "" && height != "") {
            var area = 0.5 * base * height;
            document.getElementById("results").innerHTML = "Area = " + area + "cm²";
        }else {
            alert("A field or all field are empty.")
        }
    }else if(target=="Base") {
        var area = document.getElementById("firinput").value;
        var height = document.getElementById("secinput").value;
        if((area != "" && height != "") && area != "" && height != "") {
            var base = (2 * area) / height;
            document.getElementById("results").innerHTML = "Base = " + base + "cm";
        }else {
            alert("A field or all field are empty.")
        }
    }else {
        var area = document.getElementById("firinput").value;
        var base = document.getElementById("secinput").value;
        if((area != "" | base != "") && area != "" && base != "") {
            var height = (2 * area) / base;
            document.getElementById("results").innerHTML = "Base = " + height + "cm";
        }else {
            alert("A field or all field are empty.")
        }
    }
}
