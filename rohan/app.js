let body = document.querySelector("body");
let photoContainer = document.querySelector("#photoContainer");
let photo=document.querySelector("#photo");
let questionContainer = document.querySelector("#questionContainer");
let pillsContainer = document.querySelector("#pillsContainer");
let bluePill = document.querySelector("#bluePill");
let redPill = document.querySelector("#redPill");
let pageTwo=document.querySelector('#pageTwo');

redPill.addEventListener("click", function() {
    console.log("hi");
    body.removeChild(pillsContainer);
    body.removeChild(questionContainer);
    body.removeChild(photoContainer);
    pageTwo.style.display="flex";
});

let skills=document.querySelector("#skills");
let projects=document.querySelector("#projects");

let c=document.querySelector("#c");
let skillsSubListC=document.querySelector("#skillsSubListC");

let cpp = document.querySelector("#cpp");
let skillsSubListCpp = document.querySelector("#skillsSubListCpp");

cpp.addEventListener("click", function () {
    console.log("hi cpp");

});

let py = document.querySelector("#py");
let skillsSubListPy = document.querySelector("#skillsSubListPy");

let java = document.querySelector("#java");
let skillsSubListJava = document.querySelector("#skillsSubListJava");

let frontEnd = document.querySelector("#frontEnd");
let skillsSubListFrontEnd = document.querySelector("#skillsSubListFrontEnd");

let projectBtn = document.querySelector("#projectBtn");
let addProject = document.querySelector("#addProject");
let addSubSkill = document.querySelector("#addSubSkill");
let addSkill = document.querySelector("#addSkill");

let startingMessage=document.querySelector('#startingmessage')
let listOfProjects = document.querySelector("#listOfProjects");
let addProjectForm = document.querySelector("#addProjectForm");
let addSubSkillForm = document.querySelector("#addSubSkillForm");
let addSkillForm = document.querySelector("#addSkillForm");

let cProjects = document.querySelector("#cProjects");
let cppProjects = document.querySelector("#cppProjects");
let pyProjects = document.querySelector("#pyProjects");
let javaProjects = document.querySelector("#javaProjects");
let frontEndProjects = document.querySelector("#frontEndProjects");

c.addEventListener("click",function(){
    console.log("hi c");
    if(skillsSubListC.style.display=="none"){
        skills.style.width="20%";
        projects.style.width="80%";

        startingMessage.style.display="none";
        listOfProjects.style.display = "none";
        addProjectForm.style.display = "none";
        addSkillForm.style.display = "none";
        addSubSkillForm.style.display = "none";

        skillsSubListC.style.display="inline-block";
        skillsSubListCpp.style.display = "none";
        skillsSubListPy.style.display = "none";
        skillsSubListJava.style.display = "none";
        skillsSubListFrontEnd.style.display = "none";

        cProjects.style.display = "inline-block";
        cppProjects.style.display = "none";
        pyProjects.style.display = "none";
        javaProjects.style.display = "none";
        frontEndProjects.style.display = "none";
    }
    else if(skillsSubListC.style.display=="inline-block"){
        skills.style.width="10%";
        projects.style.width="90%";
        skillsSubListC.style.display="none";
        console.log("hello");
    }
    
});

cpp.addEventListener("click", function () {
    console.log("hi cpp");
    if (skillsSubListCpp.style.display == "none") {
        skills.style.width = "20%";
        projects.style.width = "80%";

        startingMessage.style.display="none";
        listOfProjects.style.display = "none";
        addProjectForm.style.display = "none";
        addSkillForm.style.display = "none";
        addSubSkillForm.style.display = "none";

        skillsSubListCpp.style.display = "inline-block";
        skillsSubListC.style.display = "none";
        skillsSubListPy.style.display = "none";
        skillsSubListJava.style.display = "none";
        skillsSubListFrontEnd.style.display = "none";

        cppProjects.style.display = "inline-block";
        cProjects.style.display = "none";
        pyProjects.style.display = "none";
        javaProjects.style.display = "none";
        frontEndProjects.style.display = "none";
    } else if (skillsSubListCpp.style.display == "inline-block") {
        skills.style.width = "10%";
        projects.style.width = "90%";
        skillsSubListCpp.style.display = "none";
        console.log("hello");
    }
});

py.addEventListener("click", function () {
    console.log("hi py");
    if (skillsSubListPy.style.display == "none") {
        skills.style.width = "20%";
        projects.style.width = "80%";

        startingMessage.style.display="none";
        listOfProjects.style.display = "none";
        addProjectForm.style.display = "none";
        addSkillForm.style.display = "none";
        addSubSkillForm.style.display = "none";

        skillsSubListPy.style.display = "inline-block";
        skillsSubListC.style.display = "none";
        skillsSubListCpp.style.display = "none";
        skillsSubListJava.style.display = "none";
        skillsSubListFrontEnd.style.display = "none";

        pyProjects.style.display = "inline-block";
        cProjects.style.display = "none";
        cppProjects.style.display = "none";
        javaProjects.style.display = "none";
        frontEndProjects.style.display = "none";
    } else if (skillsSubListPy.style.display == "inline-block") {
        skills.style.width = "10%";
        projects.style.width = "90%";
        skillsSubListPy.style.display = "none";
        console.log("hello");
    }
});

java.addEventListener("click", function () {
    console.log("hi java");
    if (skillsSubListJava.style.display == "none") {
        skills.style.width = "20%";
        projects.style.width = "80%";

        startingMessage.style.display="none";
        listOfProjects.style.display = "none";
        addProjectForm.style.display = "none";
        addSkillForm.style.display = "none";
        addSubSkillForm.style.display = "none";

        skillsSubListJava.style.display = "inline-block";
        skillsSubListC.style.display = "none";
        skillsSubListCpp.style.display = "none";
        skillsSubListPy.style.display = "none";
        skillsSubListFrontEnd.style.display = "none";

        javaProjects.style.display = "inline-block";
        cProjects.style.display = "none";
        cppProjects.style.display = "none";
        pyProjects.style.display = "none";
        frontEndProjects.style.display = "none";
    } else if (skillsSubListJava.style.display == "inline-block") {
        skills.style.width = "10%";
        projects.style.width = "90%";
        skillsSubListJava.style.display = "none";
        console.log("hello");
    }
});

frontEnd.addEventListener("click", function () {
    console.log("hi frontEnd");
    if (skillsSubListFrontEnd.style.display == "none") {
        skills.style.width = "20%";
        projects.style.width = "80%";

        startingMessage.style.display="none";
        listOfProjects.style.display = "none";
        addProjectForm.style.display = "none";
        addSkillForm.style.display = "none";
        addSubSkillForm.style.display = "none";

        skillsSubListFrontEnd.style.display = "inline-block";
        skillsSubListC.style.display = "none";
        skillsSubListCpp.style.display = "none";
        skillsSubListPy.style.display = "none";
        skillsSubListJava.style.display = "none";

        frontEndProjects.style.display = "inline-block";
        cProjects.style.display = "none";
        cppProjects.style.display = "none";
        pyProjects.style.display = "none";
        javaProjects.style.display = "none";
    } else if (skillsSubListFrontEnd.style.display == "inline-block") {
        skills.style.width = "10%";
        projects.style.width = "90%";
        skillsSubListFrontEnd.style.display = "none";
        console.log("hello");
    }
});


// cProjects.addEventListener("click", function () {
//     console.log("hi c");
//     if (cProjects.style.display == "none") {
//         skills.style.width = "20%";
//         projects.style.width = "80%";

//         startingMessage.style.display="none";
//         listOfProjects.style.display = "none";
//         addProjectForm.style.display = "none";
//         addSkillForm.style.display = "none";
//         addSubSkillForm.style.display = "none";

//         skillsSubListC.style.display = "inline-block";
//         skillsSubListCpp.style.display = "none";
//         skillsSubListPy.style.display = "none";
//         skillsSubListJava.style.display = "none";
//         skillsSubListFrontEnd.style.display = "none";

//         cProjects.style.display = "inline-block";
//         cppProjects.style.display = "none";
//         pyProjects.style.display = "none";
//         javaProjects.style.display = "none";
//         frontEndProjects.style.display = "none";
//     } else if (cProjects.style.display == "inline-block") {
//         skills.style.width = "10%";
//         projects.style.width = "90%";
//         cProjects.style.display = "none";
//         console.log("hello");
//     }
// });

// cppProjects.addEventListener("click", function () {
//     console.log("hi cpp");
//     if (cppProjects.style.display == "none") {
//         skills.style.width = "20%";
//         projects.style.width = "80%";

//         startingMessage.style.display="none";
//         listOfProjects.style.display = "none";
//         addProjectForm.style.display = "none";
//         addSkillForm.style.display = "none";
//         addSubSkillForm.style.display = "none";

//         skillsSubListCpp.style.display = "inline-block";
//         skillsSubListC.style.display = "none";
//         skillsSubListPy.style.display = "none";
//         skillsSubListJava.style.display = "none";
//         skillsSubListFrontEnd.style.display = "none";

//         cppProjects.style.display = "inline-block";
//         cProjects.style.display = "none";
//         pyProjects.style.display = "none";
//         javaProjects.style.display = "none";
//         frontEndProjects.style.display = "none";
//     } else if (cppProjects.style.display == "inline-block") {
//         skills.style.width = "10%";
//         projects.style.width = "90%";
//         cppProjects.style.display = "none";
//         console.log("hello");
//     }
// });

// pyProjects.addEventListener("click", function () {
//     console.log("hi pp");
//     if (pyProjects.style.display == "none") {
//         skills.style.width = "20%";
//         projects.style.width = "80%";

//         startingMessage.style.display="none";
//         listOfProjects.style.display = "none";
//         addProjectForm.style.display = "none";
//         addSkillForm.style.display = "none";
//         addSubSkillForm.style.display = "none";

//         skillsSubListPy.style.display = "inline-block";
//         skillsSubListC.style.display = "none";
//         skillsSubListCpp.style.display = "none";
//         skillsSubListJava.style.display = "none";
//         skillsSubListFrontEnd.style.display = "none";

//         pyProjects.style.display = "inline-block";
//         cProjects.style.display = "none";
//         cppProjects.style.display = "none";
//         javaProjects.style.display = "none";
//         frontEndProjects.style.display = "none";
//     } else if (pyProjects.style.display == "inline-block") {
//         skills.style.width = "10%";
//         projects.style.width = "90%";
//         pyProjects.style.display = "none";
//         console.log("hello");
//     }
// });

// javaProjects.addEventListener("click", function () {
//     console.log("hi jp");
//     if (javaProjects.style.display == "none") {
//         skills.style.width = "20%";
//         projects.style.width = "80%";

//         startingMessage.style.display="none";
//         listOfProjects.style.display = "none";
//         addProjectForm.style.display = "none";
//         addSkillForm.style.display = "none";
//         addSubSkillForm.style.display = "none";

//         skillsSubListJava.style.display = "inline-block";
//         skillsSubListC.style.display = "none";
//         skillsSubListCpp.style.display = "none";
//         skillsSubListPy.style.display = "none";
//         skillsSubListFrontEnd.style.display = "none";

//         javaProjects.style.display = "inline-block";
//         cProjects.style.display = "none";
//         cppProjects.style.display = "none";
//         pyProjects.style.display = "none";
//         frontEndProjects.style.display = "none";
//     } else if (javaProjects.style.display == "inline-block") {
//         skills.style.width = "10%";
//         projects.style.width = "90%";
//         javaProjects.style.display = "none";
//         console.log("hello");
//     }
// });

// frontEndProjects.addEventListener("click", function () {
//     console.log("hi fep");
//     if (frontEndProjects.style.display == "none") {
//         skills.style.width = "20%";
//         projects.style.width = "80%";

//         startingMessage.style.display="none";
//         listOfProjects.style.display = "none";
//         addProjectForm.style.display = "none";
//         addSkillForm.style.display = "none";
//         addSubSkillForm.style.display = "none";

//         skillsSubListFrontEnd.style.display = "inline-block";
//         skillsSubListC.style.display = "none";
//         skillsSubListCpp.style.display = "none";
//         skillsSubListPy.style.display = "none";
//         skillsSubListJava.style.display = "none";

//         frontEndProjects.style.display = "inline-block";
//         cProjects.style.display = "none";
//         cppProjects.style.display = "none";
//         pyProjects.style.display = "none";
//         javaProjects.style.display = "none";
//     } else if (frontEndProjects.style.display == "inline-block") {
//         skills.style.width = "10%";
//         projects.style.width = "90%";
//         frontEndProjects.style.display = "none";
//         console.log("hello");
//     }
// });

projectBtn.addEventListener("click", function () {
    console.log("hi listOfProjects");
    if (listOfProjects.style.display == "none") {
        // skills.style.width = "20%";
        // projects.style.width = "80%";
        skills.style.width = "10%";
        projects.style.width = "90%";

        startingMessage.style.display="none";
        listOfProjects.style.display = "inline-block";
        addProjectForm.style.display = "none";
        addSkillForm.style.display = "none";
        addSubSkillForm.style.display = "none";

        skillsSubListFrontEnd.style.display = "none";
        skillsSubListC.style.display = "none";
        skillsSubListCpp.style.display = "none";
        skillsSubListPy.style.display = "none";
        skillsSubListJava.style.display = "none";

        frontEndProjects.style.display = "none";
        cProjects.style.display = "none";
        cppProjects.style.display = "none";
        pyProjects.style.display = "none";
        javaProjects.style.display = "none";
    } else if (listOfProjects.style.display == "inline-block") {
        // skills.style.width = "10%";
        // projects.style.width = "90%";
        listOfProjects.style.display = "none";
        console.log("hello");
    }
});

// addProject.addEventListener("click", function () {
//     console.log("hi addProjectForm");
//     if (addProjectForm.style.display == "none") {
//         // skills.style.width = "20%";
//         // projects.style.width = "80%";
//         skills.style.width = "10%";
//         projects.style.width = "90%";

//         startingMessage.style.display="none";
//         addProjectForm.style.display = "inline-block";
//         listOfProjects.style.display = "none";
//         addSkillForm.style.display = "none";
//         addSubSkillForm.style.display = "none";

//         skillsSubListFrontEnd.style.display = "none";
//         skillsSubListC.style.display = "none";
//         skillsSubListCpp.style.display = "none";
//         skillsSubListPy.style.display = "none";
//         skillsSubListJava.style.display = "none";

//         frontEndProjects.style.display = "none";
//         cProjects.style.display = "none";
//         cppProjects.style.display = "none";
//         pyProjects.style.display = "none";
//         javaProjects.style.display = "none";
//     } else if (addProjectForm.style.display == "inline-block") {
//         // skills.style.width = "10%";
//         // projects.style.width = "90%";
//         addProjectForm.style.display = "none";
//         console.log("hello");
//     }
// });

// addSkill.addEventListener("click", function () {
//     console.log("hi addSkillForm ");
//     if (addSkillForm.style.display == "none") {
//         // skills.style.width = "20%";
//         // projects.style.width = "80%";
//         skills.style.width = "10%";
//         projects.style.width = "90%";

//         startingMessage.style.display="none";
//         addSkillForm.style.display = "inline-block";
//         listOfProjects.style.display = "none";
//         addProjectForm.style.display = "none";
//         addSubSkillForm.style.display = "none";

//         skillsSubListFrontEnd.style.display = "none";
//         skillsSubListC.style.display = "none";
//         skillsSubListCpp.style.display = "none";
//         skillsSubListPy.style.display = "none";
//         skillsSubListJava.style.display = "none";

//         frontEndProjects.style.display = "none";
//         cProjects.style.display = "none";
//         cppProjects.style.display = "none";
//         pyProjects.style.display = "none";
//         javaProjects.style.display = "none";
//     } else if (addSkillForm.style.display == "inline-block") {
//         skills.style.width = "10%";
//         projects.style.width = "90%";
//         addSkillForm.style.display = "none";
//         console.log("hello");
//     }
// });

// addSubSkill.addEventListener("click", function () {
//     console.log("hi addsubskillform");
//     if (addSubSkillForm.style.display == "none") {
//         // skills.style.width = "20%";
//         // projects.style.width = "80%";
//         skills.style.width = "10%";
//         projects.style.width = "90%";

//         startingMessage.style.display="none";
//         addSubSkillForm.style.display = "inline-block";
//         listOfProjects.style.display = "none";
//         addProjectForm.style.display = "none";
//         addSkillForm.style.display = "none";

//         skillsSubListFrontEnd.style.display = "none";
//         skillsSubListC.style.display = "none";
//         skillsSubListCpp.style.display = "none";
//         skillsSubListPy.style.display = "none";
//         skillsSubListJava.style.display = "none";

//         frontEndProjects.style.display = "none";
//         cProjects.style.display = "none";
//         cppProjects.style.display = "none";
//         pyProjects.style.display = "none";
//         javaProjects.style.display = "none";
//     } else if (addSubSkillForm.style.display == "inline-block") {
//         skills.style.width = "10%";
//         projects.style.width = "90%";
//         addSubSkillForm.style.display = "none";
//         console.log("hello");
//     }
// });

// let mainSkillsList=document.querySelector('#mainSkillsList');
// let addSkillSubmitBtn=document.querySelector('#addSkillSubmitBtn');
// let skillName=document.querySelector('#skillName');
// let imageURL=document.querySelector('#imageURL');


// addSkillSubmitBtn.addEventListener("click",function(){
//     console.log(skillName.value);
//     let newSkillName=skillName.value;
//     let newImgURL=imageURL.value;
//     console.log(newSkillName);

//     let some=document.createElement('div');
//     some.id=newSkillName;
//     some.classList.add("skills");

//     let someImg=document.createElement('div');
//     someImg.id=newSkillName+"Img";
//     someImg.classList.add("skillsImg");

//     someImg.style.backgroundImage = `url('${newImgURL}')`;
//     someImg.style.backgroundSize = "cover";  
//     someImg.style.backgroundPosition = "center";

//     let someTtl=document.createElement('div');
//     someTtl.id=newSkillName+"Ttl";
//     someTtl.classList.add("skillsTtl");

//     someTtl.innerHTML=`<p style="margin: 0%; display: flex; justify-content: center;">${newSkillName}</p>`;

//     mainSkillsList.appendChild(some);
//     some.appendChild(someImg);
//     some.appendChild(someTtl);

// });
