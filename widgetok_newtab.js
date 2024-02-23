import wixLocation from 'wix-location';

$w.onReady(function () {
  const countryDropdown = $w('#country');
  const categoryDropdown = $w('#category');

  // Nonaktifkan dropdown category pada awalnya
  categoryDropdown.disable();

  // Urutkan opsi dropdown country
  const sortedCountryOptions = countryDropdown.options.sort((a, b) => {
    return a.label.localeCompare(b.label);
  });

  // Terapkan opsi yang sudah diurutkan pada dropdown country
  countryDropdown.options = sortedCountryOptions;

  countryDropdown.onChange(() => {
    const countryValue = countryDropdown.value;

    // Show or hide categories based on selected country
    if (countryValue === 'Indonesian') {
      categoryDropdown.enable(); // Aktifkan dropdown category jika memilih negara Indonesia
      categoryDropdown.options = [
        {label: 'Specialists', value: 'spesialis'},
        {label: 'General Orthopaedics', value: 'generalorto'},
        {label: 'General Practitioners', value: 'generalpractice'},
        {label: 'Residence', value: 'residence'}
      ];
    } else {
      categoryDropdown.enable(); // Aktifkan dropdown category jika memilih negara selain Indonesia
      categoryDropdown.options = [
        {label: 'Specialists', value: 'specialist'},
        {label: 'General Orthopaedics', value: 'generalorthopaedic'},
        {label: 'General Practitioners', value: 'generalpractices'}
      ];
    }
  });

  categoryDropdown.onChange(() => {
    const countryValue = countryDropdown.value;
    const categoryValue = categoryDropdown.value;

    // Handle the redirection based on country and category
    if (countryValue === 'Indonesian') {
      switch (categoryValue) {
        case 'spesialis':
          wixLocation.to('https://widget.loket.com/widget/yhvxztsdw3t7eqfjh', '_blank');
          break;
        case 'residence':
          wixLocation.to('https://widget.loket.com/widget/yhxph8m5n1gs91wgf', '_blank');
          break;
        case 'generalorto':
          wixLocation.to('https://widget.loket.com/widget/yhvx1igjftsyqn6qt', '_blank');
          break;
        case 'generalpractice':
          wixLocation.to('https://widget.loket.com/widget/yhxp7fl6rrinsqyur', '_blank');
          break;
      }
    } else {
      switch (categoryValue) {
        case 'specialist':
          wixLocation.to('https://widget.loket.com/widget/c51ac8242b6b72038881716887a8cd2b', '_blank');
          break;
        case 'generalorthopaedic':
          wixLocation.to('https://widget.loket.com/widget/048d2138553fea68ef52f738747e0aeb', '_blank');
          break;
        case 'generalpractices':
          wixLocation.to('https://widget.loket.com/widget/4ef0d3277c84403cb01c348801a23d1c', '_blank');
          break;
      }
    }
  });
});
