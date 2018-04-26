/* Kode JQuery */

$('button').click(function()
{
	var idPage = $(this).attr('id');

	if(idPage == "jobBtn")
	{
		window.location.href = "data/job.html";
	}
	else if(idPage == "employBtn")
	{
		window.location.href = "data/employee.html";
	}
	else if (idPage == "departBtn")
	{
		window.location.href = "data/department.html";
	}
});

/* Kode JQuery */