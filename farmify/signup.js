
document.getElementById('accountType').addEventListener('change', function() {
    const accountType = this.value;
    const retailerDetails = document.getElementById('retailerDetails');
    const farmerDetails = document.getElementById('farmerDetails');

    if (accountType === 'retailer') {
        retailerDetails.style.display = 'block';
        farmerDetails.style.display = 'none';
    } else if (accountType === 'farmer') {
        retailerDetails.style.display = 'none';
        farmerDetails.style.display = 'block';
    } else {
        retailerDetails.style.display = 'none';
        farmerDetails.style.display = 'none';
    }
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const accountType = document.getElementById('accountType').value;
    let isValid = true;
    let details = {};

    // Collect and validate contact details
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;

    if (!phoneNumber || !email) {
        isValid = false;
    } else {
        details.phoneNumber = phoneNumber;
        details.email = email;
    }

    // Account type-specific validation
    if (accountType === 'retailer') {
        const merchantId = document.getElementById('merchantId').value;
        const retailerName = document.getElementById('retailerName').value;
        const retailerAddress = document.getElementById('retailerAddress').value;
        
        if (!merchantId || !retailerName || !retailerAddress) {
            isValid = false;
        } else {
            details.merchantId = merchantId;
            details.retailerName = retailerName;
            details.retailerAddress = retailerAddress;
        }
    } else if (accountType === 'farmer') {
        const farmerName = document.getElementById('farmerName').value;
        const farmLocation = document.getElementById('farmLocation').value;
        const cropType = document.getElementById('cropType').value;
       
        if (!farmerName || !farmLocation || !cropType) {
            isValid = false;
        } else {
            details.farmerName = farmerName;
            details.farmLocation = farmLocation;
            details.cropType = cropType;
        }
    } else {
        isValid = false;
    }

    // Show message based on validation
    if (isValid) {
        console.log(details);
        document.getElementById('message').textContent = "Signup successful!";
        document.getElementById('message').style.color = "green";
    } else {
        document.getElementById('message').textContent = "Please fill in all fields.";
        document.getElementById('message').style.color = "red";
    }
});
/*document.addEventListener('DOMContentLoaded', () => {
    const accountTypeSelect = document.getElementById('accountType');
    const retailerDetails = document.getElementById('retailerDetails');
    const farmerDetails = document.getElementById('farmerDetails');
    const signupForm = document.getElementById('signupForm');
    const message = document.getElementById('message');

    // Show/hide form sections based on the selected account type
    accountTypeSelect.addEventListener('change', function () {
        if (this.value === 'retailer') {
            retailerDetails.style.display = 'block';
            farmerDetails.style.display = 'none';
        } else if (this.value === 'farmer') {
            farmerDetails.style.display = 'block';
            retailerDetails.style.display = 'none';
        } else {
            retailerDetails.style.display = 'none';
            farmerDetails.style.display = 'none';
        }
    });

    // Handle form submission
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const accountType = accountTypeSelect.value;
        if (accountType === 'farmer') {
            window.location.href = 'product-list.html?role=farmer';
        } else if (accountType === 'retailer') {
            window.location.href = 'product-list.html?role=retailer';
        } else {
            message.textContent = 'Please select an account type.';
            return;
        }
    });
});*/


