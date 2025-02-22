document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalWndwForContact");
    const openFormBtn = document.getElementById("openFormBtn");
    const closeBtn = document.querySelector(".close");
    const closeFormBtn = document.getElementById("closeFormBtn");
    const contactForm = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    // Відкрити модальне вікно
    openFormBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Закрити модальне вікно (X)
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Закрити модальне вікно (кнопка "Закрити")
    closeFormBtn.addEventListener("click", function () {
        modal.style.display = "none";

    });

    // Відправлення форми
// Відправлення форми
contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        question: document.getElementById("question").value // Додаємо поле питання
    };

    try {
        const response = await fetch("/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log("Response data:", data); // Логування відповіді

        if (response.ok) {
            responseMessage.textContent = data.message;
            contactForm.reset();
            setTimeout(() => {
                modal.style.display = "none";
            }, 2000);
        } else {
            // Вивести помилку, якщо статус не успішний
            responseMessage.textContent = data.message || "Помилка відправки.";
        }
    } catch (error) {
        console.error("Error sending message:", error);
        responseMessage.textContent = "Помилка відправки.";
    }
});

    
});

document.addEventListener("DOMContentLoaded", function () {
    const questionInput = document.getElementById("question");

    questionInput.addEventListener("input", function () {
        this.style.height = "auto"; // Скидаємо висоту, щоб правильно перерахувати
        this.style.height = (this.scrollHeight) + "px"; // Встановлюємо висоту залежно від вмісту
    });
});

