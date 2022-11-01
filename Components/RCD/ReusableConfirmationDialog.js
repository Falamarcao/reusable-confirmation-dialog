var debug = true;

var reusableConfirmationDialog = new ReusableConfirmationDialog();

function ReusableConfirmationDialog() {
  this.show = function (id) {
    if (debug) console.log(`ReusableConfirmationDialog.show(${id})`);

    const overlay = document.getElementById("dialog-overlay");
    const dialog = document.getElementById(id);

    overlay.style.display = "block";
    dialog.style.display = "block";
  };

  this.hide = function (id) {
    if (debug) console.log(`ReusableConfirmationDialog.hide(${id})`);

    const overlay = document.getElementById("dialog-overlay");
    const dialog = document.getElementById(id);

    overlay.style.display = "none";
    dialog.style.display = "none";
  };
}
