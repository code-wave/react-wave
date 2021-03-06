import Swal from "sweetalert2";


//경고 alert
export const WarningAlert = (warning_text, footer) =>{
  Swal.fire({
    text: warning_text,
    icon: "warning",
    confirmButtonColor: "#999cda",
    footer: footer
  })
}

//성공 alert
export const SuccessAlert = (success_text) =>{
  Swal.fire({
    text: success_text,
    icon: "success",
    confirmButtonColor: "#999cda",
  })
}

//에러 alert
export const ErrorAlert = (error_text) =>{
  Swal.fire({
    text: error_text,
    icon: "error",
    confirmButtonColor: "#999cda",
  })
}