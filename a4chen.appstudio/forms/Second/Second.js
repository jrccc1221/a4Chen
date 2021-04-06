showbtn.onclick=function(){
  query = "Select from customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)
   if (req.status == 200) { 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           Label1.textContent = "There are no customers in the database."
         else {
           for (i = 0; i < results.length; i++)
              customers.addItem(results[i][0])
        }
  }
  }



 delbtn.onclick = function() {
 let companyDelete = ""
 companyDelete = customers.value
 query = "Delete from customer = '" + companyDelete + "'"
 req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
 }

refbtn.onclick=function(){
  location.reload()
}