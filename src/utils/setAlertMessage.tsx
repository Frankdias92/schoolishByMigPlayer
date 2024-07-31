export default function setAlertMessage(data: { ref: unknown, type: string; message: string }) {
    const alertMessageBox = document.createElement("div")
    alertMessageBox.style.display = "block";
    alertMessageBox.innerHTML = `<p>${data.message}</p><button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>`;
    alertMessageBox.classList.toggle(
      data.type === "error"
        ? "alert-danger"
        : data.type === "warning"
        ? "alert-warning"
        : data.type === "info"
        ? "alert-info"
        : "alert-success"
    );
  }