function saveData() {
    var name = document.getElementById('mail').value;
    var phone = document.getElementById('password').value;
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'save-data.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        alert(xhr.responseText);
      }
    };
    xhr.send('mail=' + encodeURIComponent(mail) + '&password=' + encodeURIComponent(password));
  }