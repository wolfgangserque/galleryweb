import wixLocation from 'wix-location';

$w.onReady(function () {
  const categoryDropdown = $w('#category');

  categoryDropdown.onChange(() => {
    const countryValue = $w('#country').value;
    const categoryValue = categoryDropdown.value;

   if (countryValue === 'Indonesia' && categoryValue === 'general') {
      wixLocation.to('https://ibb.co/VTTm2Mw');
    } else if (countryValue === 'Indonesia' && categoryValue === 'spesialis') {
      wixLocation.to('https://ibb.co/tDdQZGh');
    } else if (countryValue !== 'Indonesia' && categoryValue === 'general') {
      wixLocation.to('https://ibb.co/4TTW5bj');
    } else if (countryValue !== 'Indonesia' && categoryValue === 'spesialis') {
      wixLocation.to('https://ibb.co/4TTW5bj');
    }
  });
});
