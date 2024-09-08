// const profileImage = document.getElementById('profileimage') as HTMLInputElement
//listing element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();

//type assertion
const profileImageElement = document.getElementById('profileimage') as HTMLInputElement;
const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;
const educationElement = document.getElementById('education') as HTMLTextAreaElement;
const skillsElement = document.getElementById('skill') as HTMLTextAreaElement;
const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;

if(nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement) {
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const skill = skillsElement.value;
    const experience = experienceElement.value;




//resume output
const resumeOutput = `

<h2>Resume</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skill}</p>
`;

const resumeOutputElement = document.getElementById('resumeOutput')
if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
} else {
    console.error('Out put element is missing')
}
}else {
    console.error('One or more out put element are missing')
}
})

