feather.replace();



//----------------- Sidebar Active Class Scroll js code start here -----------------
let activeItem = document.querySelector(".sidebar-list .active");
let sidebarList = document.querySelector(".sidebar-list");

if (activeItem && sidebarList) {
    activeItem.scrollIntoView({
        // behavior: 'smooth',
        block: 'center'
    });
}
//----------------- Sidebar Active Class Scroll js code end here -----------------



//----------------- Sidebar Toggle js code start here -----------------
$(document).ready(function() {
    var $crmSidebar = $(".esystem-sidebar");
    var $body = $("body");

    $(".sidebar-open-btn, .sidebar-close-btn").click(function() {
        $crmSidebar.toggleClass("esystem-sidebar-open");
        $body.toggleClass("esystem-sidebar-bg");
    });
});
//----------------- Sidebar Toggle js code end here -----------------



//----------------- Bootstrap Dropdown js code start here -----------------
$(document).ready(function() {
    $('.dropdown').on('show.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });
    $('.dropdown').on('hide.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(150);
    });
});
//----------------- Bootstrap Dropdown js code end here -----------------



//----------------- File Preview js code start here -----------------
function filePreview(inputId, previewId, viewBoxId, modalImageId) {
    const preview = document.getElementById(previewId);
    const fileInput = document.querySelector(inputId);
    const file = fileInput.files[0];
    const fileViewBox = document.querySelector(viewBoxId);

    if (file) {
        const reader = new FileReader();

        reader.onloadend = function() {
            preview.src = reader.result;
            fileViewBox.style.display = 'flex';
            document.getElementById(modalImageId).src = reader.result;
        };

        reader.readAsDataURL(file);
    } else {
        fileViewBox.style.display = 'none';
    }
}
//----------------- File Preview js code start here -----------------



//----------------- Form Select js code start here -----------------
document.querySelectorAll('.comn-form-select').forEach((el) => {
    let settings = {};
    if (el.hasAttribute('multiple')) {
        settings.plugins = ['remove_button'];
    }
    new TomSelect(el, settings);
});

//----------------- Form Select js code end here -----------------



//----------------- Datepicker js code start here -----------------
$(document).ready(function() {
    $(".comn-datepicker, .comn-datetimepicker, .comn-range-datepicker, .comn-multiple-datepicker").each(function() {
        var $container = $(this).closest('.datepicker-container');
        var enableTime = $(this).hasClass('comn-datetimepicker');
        var rangePicker = $(this).hasClass('comn-range-datepicker');
        var multiplePicker = $(this).hasClass('comn-multiple-datepicker');

        var mode = "single";
        if (rangePicker) {
            mode = "range";
        } else if (multiplePicker) {
            mode = "multiple";
        }

        $(this).flatpickr({
            appendTo: $container[0],
            enableTime: enableTime,
            dateFormat: enableTime ? "d/m/Y h:iK" : "d/m/Y",
            time_24hr: false,
            shorthandCurrentMonth: true,
            locale: {
                firstDayOfWeek: 1
            },
            disableMobile: true,
            prevArrow: '<i class="health-icon-chevron-left"></i>',
            nextArrow: '<i class="health-icon-chevron-right"></i>',
            mode: mode,
            conjunction: "   |   ",
            onChange: function(selectedDates, dateStr, instance) {
                instance.element.value = dateStr.replace('to', '-');
            },
        });
    });
});


//----------------- Datepicker js code end here -----------------



//----------------- Datatable js code start here -----------------
const datatableLenghtmenu = "_MENU_"
const datatablePagination = {
    first: '<i class="health-icon-double-chevron-left"></i>',
    previous: '<i class="health-icon-chevron-left"></i>',
    next: '<i class="health-icon-chevron-right"></i>',
    last: '<i class="health-icon-double-chevron-right"></i>',
};
const datatableNoRecord = '<div class="comn-no-record-box"><img src="../assets/images/no-record-image.svg">No results found</div>';
//----------------- Datatable js code end here -----------------



//----------------- Show Hide Password code start here -----------------
$(".show-hide-password-btn").click(function() {
    var input = $(this).siblings("input");
    var eyeIcon = $(this).find(".feather-eye-off");
    var eyeSlashIcon = $(this).find(".feather-eye");

    if (input.attr("type") === "password") {
        input.attr("type", "text");
        eyeIcon.hide();
        eyeSlashIcon.show();
    } else {
        input.attr("type", "password");
        eyeIcon.show();
        eyeSlashIcon.hide();
    }
});
//----------------- Show Hide Password code end here -----------------


$(document).ready(function() {
    $('.filter-dropdown .dropdown-menu').on('click', function(event) {
        event.stopPropagation();
    });
});