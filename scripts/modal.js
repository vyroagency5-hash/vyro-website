import { SERVICES, CLIENTS, WORKS } from "./data.js";

export function openServices(key) {
    const item = SERVICES[key];
    if (!item) return;

    document.getElementById('svcTag').textContent = item.tag
    document.getElementById('svcImg').src = item.img;
    document.getElementById('svcTitle').textContent = item.title;
    document.getElementById('svcDesc').textContent = item.desc;
    const bl = document.getElementById("svcBenefits");
    bl.innerHTML = "";
    item.benefits.forEach((b) => {
        const li = document.createElement("li");
        li.textContent = b;
        bl.appendChild(li);
    });
    const pr = document.getElementById("svcProcess");
    pr.innerHTML = "";
    item.steps.forEach((st, i) => {
        pr.innerHTML += `<div class="m-step"><div class="step-n">${String(i + 1).padStart(2, "0")}</div><div class="step-t"><strong>${st.t}</strong><span>${st.d}</span></div></div>`;
    });
    const mb = document.getElementById("svcmodalBox");

    document.getElementById("svcModal").classList.add("open");
    document.body.style.overflow = "hidden";
}

export function closeServices() {
    document.getElementById("svcModal").classList.remove("open");
    document.body.style.overflow = "";
}

export function handleServicesBg(e) {
    if (e.target.id === "svcModal") {
        closeServices();
    }
}

export function openClients(key) {
    const item = CLIENTS[key];
    if (!item) return;

    document.getElementById("clnImg").src = item.img;
    document.getElementById("clnTitle").textContent = item.title;
    document.getElementById("clnDesc").textContent = item.desc;
    const bl = document.getElementById("clnBenefits");
    bl.innerHTML = "";
    item.results.forEach((b) => {
        const li = document.createElement("li");
        li.textContent = b;
        bl.appendChild(li);
    });
    const pr = document.getElementById("clnProcess");
    pr.innerHTML = "";
    item.timeline.forEach((st, i) => {
        pr.innerHTML += `<div class="m-step"><div class="step-n">${String(i + 1).padStart(2, "0")}</div><div class="step-t"><strong>${st.t}</strong><span>${st.d}</span></div></div>`;
    });
    const mb = document.getElementById("clnmodalBox");

    document.getElementById("clnModal").classList.add("open");
    document.body.style.overflow = "hidden";
}

export function closeClients() {
    document.getElementById("clnModal").classList.remove("open");
    document.body.style.overflow = "";
}

export function handleClientsBg(e) {
    if (e.target.id === "clnModal") {
        closeClients();
    }
}

export function openWorks(key) {
    const item = WORKS[key];
    if (!item) return;

    document.getElementById("wrkImg").src = item.img;
    document.getElementById("wrkTitle").textContent = item.title;
    document.getElementById("wrkDesc").textContent = item.desc;

    document.getElementById("wrkModal").classList.add("open");
    document.body.style.overflow = "hidden";
}

export function closeWorks() {
    document.getElementById("wrkModal").classList.remove("open");
    document.body.style.overflow = "";
}

export function handleWorksBg(e) {
    if (e.target.id === "wrkModal") {
        closeWorks();
    }
}

export function openTeamModal() {
    const modal = document.getElementById("teamModal");
    const box = document.getElementById("teamModalBox");
    box.scrollTop = 0;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

export function closeTeamModal() {
    const modal = document.getElementById("teamModal");
    const box = document.getElementById("teamModalBox");
    modal.classList.remove("open");
    document.body.style.overflow = "";
}

export function handleTeamBg(e) {
    if (e.target === document.getElementById("teamModal")) closeTeamModal();
}
