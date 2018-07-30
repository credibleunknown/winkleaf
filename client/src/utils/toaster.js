import toastr from 'toastr';

//This is the settings for the notification component
const toaster = {
  toastSuccess: (message) => {
    toastr.options = {
      closeButton: true,
      progressBar: true,
      positionClass: "toast-top-center"
    };
    toastr.clear();
    return toastr.success(message);
  },
  toastError: (message) => {
    toastr.options = {
      closeButton: true,
      progressBar: true,
      positionClass: "toast-top-center"
    };
    toastr.clear();
    return toastr.error(message);
  }
};
export default toaster;
