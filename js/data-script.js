$('#submitBtn').click(function()
{
	var inputFieldList = $('input').toArray();

	for(var num = 0; num < inputFieldList.length; num++)
	{
		var inputFieldId = "#" + $(inputFieldList[num]).attr('id');

		// console.log(inputFieldList.length);

		if ($(inputFieldId).val() != "")
		{
			$('h4.notifSubmition').remove();
			$('#notifSubmition').append('<h4 class="text-center notifSubmition">Data berhasil disimpan.</h4>');
			$('div#notifSubmition').addClass('notifSubmition notifSuccess');
			return false;
		}
	}

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

			$('h4.notifSubmition').remove();
			$('#notifSubmition').append('<h4 class="text-center notifSubmition">' + labelForId + ' tidak boleh kosong.</h4>');
			$('div#notifSubmition').addClass('notifSubmition notifFailed');

			return false;
		}
	});
});
