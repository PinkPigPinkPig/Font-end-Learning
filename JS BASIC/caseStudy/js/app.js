function add() {
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let gender = '';

    if (document.getElementById('male').checked) {
        gender = 'Nam'
    } else if (document.getElementById('female').checked) {
        gender = 'Nữ';
    }
    if (validateForm()) {
        let student = new Student(fullName, email, phone, address, gender);
        const students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
        students.push(student);

        localStorage.setItem('students', JSON.stringify(students));
        this.renderListStudent();

    }
}

function renderListStudent() {
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    if (students.length === 0) {
        document.getElementById('list-students').style.display = 'none';
        return false;
    }
    document.getElementById('list-students').style.display = 'block';
    let tableContent = `<tr>
        <th scope="col">#</th>
        <th scope="col">Họ và tên</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Address</th>
        <th scope="col">Gender</th>
        <th scope="col">Action</th>
    </tr>`;

    students.forEach((student, index) => {
        let studentID = index;
        index++;
        tableContent += `<tr>
        <th scope="col">${index}</th>
        <th scope="col">${student.name}</th>
        <th scope="col">${student.email}</th>
        <th scope="col">${student.phone}</th>
        <th scope="col">${student.address}</th>
        <th scope="col">${student.gender}</th>
        <th scope="col">
            <a href='#' data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openEditForm(${studentID})">Edit</a> | <a href='#' onclick='deleteStudent(${studentID})'>Delete</a>
        </th>
    </tr>`;
    })
    document.getElementById('list-students').innerHTML = tableContent;
}

function deleteStudent(id) {
    const students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    students.splice(id, 1)
    localStorage.setItem('students', JSON.stringify(students));
    renderListStudent();
}

function openAddForm() {
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    phone = document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    let add = document.getElementById('add');
    let save = document.getElementById('save');
    document.getElementById('fullNameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('phoneError').innerHTML = '';
    document.getElementById('addressError').innerHTML = '';
    save.classList.add('d-none');
    add.classList.remove('d-none');
}

function openEditForm(id) {
    let male = document.getElementById('male');
    let female = document.getElementById('female');
    let add = document.getElementById('add');
    let save = document.getElementById('save');
    add.classList.add('d-none');
    save.classList.remove('d-none');

    currentID = id;

    const students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];

    document.getElementById('fullName').value = students[id].name;
    document.getElementById('email').value = students[id].email;
    document.getElementById('phone').value = students[id].phone;
    document.getElementById('address').value = students[id].address;

    let gender = students[id].gender;

    if (gender == 'Nam') {
        male.checked = true;
    } else {
        female.checked = true;
    }
}

let currentID = 0;

function changeInfo() {
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let gender = '';

    if (document.getElementById('male').checked) {
        gender = 'Nam'
    } else if (document.getElementById('female').checked) {
        gender = 'Nữ';
    }

    if (validateForm()) {
        const students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
        students[currentID].name = fullName;
        students[currentID].email = email;
        students[currentID].phone = phone;
        students[currentID].address = address;
        students[currentID].gender = gender;
        localStorage.setItem('students', JSON.stringify(students));
        renderListStudent();
    }
}

function validateForm() {
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;

    if (_.isEmpty(fullName)) {
        document.getElementById('fullNameError').innerHTML = 'Vui lòng nhập họ tên';
    } else {
        document.getElementById('fullNameError').innerHTML = '';
    }

    if (_.isEmpty(email)) {
        document.getElementById('emailError').innerHTML = 'Vui lòng nhập email';
    } else {
        document.getElementById('emailError').innerHTML = '';
    }

    if (_.isEmpty(phone)) {
        document.getElementById('phoneError').innerHTML = 'Vui lòng nhập số điện thoại';
    } else {
        document.getElementById('phoneError').innerHTML = '';
    }

    if (_.isEmpty(address)) {
        document.getElementById('addressError').innerHTML = 'Vui lòng nhập địa chỉ';
    } else {
        document.getElementById('addressError').innerHTML = '';
    }

    if(fullName && email && phone && address){
        return true
    }

    return false;
}

function closeForm() {

}