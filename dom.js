 var input = document.getElementById('addForm');
var itemL = document.getElementById('items');
var filter = document.getElementById('filter')
//create a event listener, which triggers when submit button is clicked
input.addEventListener('submit',addL);
itemL.addEventListener('click',removeItem);
filter.addEventListener('keyup',filtered);
function addL(e){
    //to make sure the submit event work, used preventDefault()
    e.preventDefault();
    //Get user input ka value not the whole tag
    var value = document.getElementById('item').value;
    var nItem = document.createElement('li');
    nItem.className = 'list-group-item';
    //Add text to the new element
    nItem.appendChild(document.createTextNode(value));
    //create a cancel button
    var cancel = document.createElement('button');
    //add the respective classes to the button
    cancel.className = 'btn btn-danger btn-sm float-end delete';
    //adding the letter to the cancel b
    cancel.appendChild(document.createTextNode('X'));
    //add the cancel button to the new item 
    nItem.appendChild(cancel);
    //Adding the new item to the list 

    var count = 0;
    //preventing the same string to be written again
    var l = itemL.getElementsByClassName('list-group-item');
    for(let a = 0;a<l.length;a++){
        if (l[a].textContent === nItem.textContent)
        {
            alert("same item cannot be added");
            count++;
        }
    }

    // preventing the user's input to be empty
    if((nItem.textContent === 'X'))
    {
        alert("cannot be empty");
    }else if(count<1){
        itemL.appendChild(nItem);
    }
}
//creating the remove function
function removeItem(e){
    //Making this condn so that it will only delete when the 'X' button is clicked
    if(e.target.classList.contains('delete')){
        if(confirm('Sure?')){
            var delItem = e.target.parentElement;
            itemL.removeChild(delItem);
        }
    }
}
function filtered(e){
    var fvalue = e.target.value.toLowerCase();
    // console.log(fvalue);
    var list = itemL.getElementsByClassName('list-group-item');

    Array.from(list).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(fvalue) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}