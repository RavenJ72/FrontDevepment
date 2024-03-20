function addItem() {
    let option = document.createElement('option');
    option.text =  document.getElementById('newItemText').value;
    option.value = document.getElementById('newItemValue').value;

    document.getElementById('menu').add(option);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}
