function pushh (x){
    let name = "", mail = "", week = "", years = "", phone = "", feed = "", upd = "", arr = [];
    name = document.forms.name.value;
    mail = document.forms.mail.value;
    week = document.forms.week.value;
    years = document.forms.years.value;
    phone = document.forms.phone.options [document.forms.phone.selectedIndex].text;
    feed = document.forms.feedback.value;
    upd = document.forms.updates.checked;
    if(localStorage.length<1){
        arr = [name, mail, week, years, phone, feed, upd];
        localStorage.setItem("comments", JSON.stringify(arr));
 } else{
        arr = JSON.parse(localStorage.getItem("comments"));
        arr.push(name);
        arr.push(mail);
        arr.push(week);
        arr.push(years);
        arr.push(phone);
        arr.push(feed);
        arr.push(upd);
        localStorage.setItem("comments", JSON.stringify(arr));
 }
    let w = open("", "displayWindow", "width=900,height=500,status=yes,toolbar=yes,menubar=yes");
    w.document.open();
    w.document.writeln("<html><head>");
    w.document.writeln('<meta http-equiv="Content-Type" content="text/html; charset=windows-1251"><link rel="stylesheet" type="text/css" href="../css/main.css">');
    w.document.writeln("</head><body>");
    w.document.writeln("<h1>Check this information, please</h1>");
    w.document.writeln('<table class="regfield">');
    w.document.writeln('<tr><td>Name</td><td>E-Mail</td><td>Week</td>Years<td></td><td>phone</td><td>Feedback</td><td>Updates</td></tr>');
    arr = JSON.parse(localStorage.getItem("comments"));
        for(let i = 0, len = arr.length; i<len; i += 7){
        w.document.writeln("<tr><td>" + arr[i] + "</td>");
        w.document.writeln("<td>" + arr[i+1] + "</td>");
        w.document.writeln('<td>' + arr[i+2] + "</td>");
        w.document.writeln('<td>' + arr[i+3] + "</td>");
        w.document.writeln('<td>' + arr[i+4] + "</td>");
        w.document.writeln('<td>' + arr[i+5] + "</td>");
        w.document.writeln('<td>' + arr[i+6] + "</td></tr>");
    }
    w.document.writeln('</table>');
    w.document.writeln('<select class="sel"><optgroup label="names">');
    for(let i = 0, len = arr.length; i<len; i += 7){
        w.document.writeln('<option>' + arr[i]+ '</option>');
    }
    w.document.writeln('</optgroup>');
    w.document.writeln('<a class="btn" href="javascript:self.close()">Return</a>');
    w.document.writeln("</body></html>");

}