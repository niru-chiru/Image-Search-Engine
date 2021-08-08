import toastr from "toastr";
import "./toast.css";

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: "toast-top-right",
  preventDuplicates: true,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

export function success(message) {
  toastr.success(message);
}

export function error(message) {
  toastr.error(message);
}

export function warning(message) {
  toastr.warning(message);
}

export function info(message) {
  toastr.success(message);
}
