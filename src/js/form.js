const form = document.querySelector(".feedback-form");
const LOCAL_STORAGE_KEY = "feedback-form-state";


let formData = {
    email: "",
    message: "",
};


const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData); 
    form.elements.email.value = formData.email; 
    form.elements.message.value = formData.message; 
}


form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value; 
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData)); 
});


form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    if (!formData.email.trim() || !formData.message.trim()) {
        alert("Fill please all fields"); 
        return;
    }

    console.log("Form submitted:", formData); 

    
    form.reset();
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    formData = { email: "", message: "" };
});