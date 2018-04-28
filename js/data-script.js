$('#submitBtn').click(function()
{
	$('input').each(function()
	{
		if($(this).val() == "")
		{
			inputId = $(this).attr('id');

			$('label').each(function()
			{
				if ($(this).attr('for') == inputId)
				{
					labelForId = $(this).text();
				}
			});

			$('#notifSubmition').append('');
			$('#notifSubmition').append('<h4 class="text-center notifSubmition">' + labelForId + ' tidak boleh kosong.</h4>');
			$('div#notifSubmition').addClass('notifSubmition notifFailed');

			return false;
		}
	});

	// var inputFieldList = document.getElementsByTagName('input');

	// foreach(var inputField in inputFieldList)
	// {
	// 	var inputFieldId = inputField.attr(id);

	// 	if ($('input#' + inputFieldId).val() != "")
	// 	{
	// 		$('#notifSubmition').append('');
	// 		$('#notifSubmition').append('<h4 class="text-center notifSubmition notifSuccess">Data berhasil disimpan.</h4>');
	// 	}
	// }
});
