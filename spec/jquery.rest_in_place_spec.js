jasmine.include('lib/jquery-1.3.2.js', true);
jasmine.include('../javascripts/jquery.rest_in_place.js', true);

describe('RestInPlace', function () {
  var testEl;
  beforeEach(function () {
    testEl = $('<div></div>').attr('class', 'rest_in_place');
    $(document.body).append(testEl);
    jQuery.ready();
  });

  it('should save on blur', function () {
    spyOn(jQuery, 'ajax');
    testEl.click();
    testEl.value = 'test data';
    testEl.find('input').blur();
    expect(jQuery.ajax).wasCalled();
  });

});