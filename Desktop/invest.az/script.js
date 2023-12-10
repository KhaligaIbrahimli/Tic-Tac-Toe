document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab_btn");
    const allContent = document.querySelectorAll(".content");

    let activeTabIndex = parseInt(localStorage.getItem("activeTabIndex")) || 0;

    const activateTab = (index) => {
        tabs.forEach((tab) => tab.classList.remove("active"));
        allContent.forEach((content) => content.classList.remove("active"));

        tabs[index].classList.add("active");
        allContent[index].classList.add("active");

        tabs.forEach((tab, i) => {
            const borderBottomColor = i === index ? "#1693AD" : "";
            tab.style.borderBottomColor = borderBottomColor;
        });

        activeTabIndex = index;
        localStorage.setItem("activeTabIndex", activeTabIndex.toString());
    };

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            activateTab(index);
        });
    });

    activateTab(activeTabIndex);
});
