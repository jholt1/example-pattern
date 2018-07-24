suite('ns-button', function() {

  test('instantiating the element with default properties works', function() {
    var element = fixture('nsButtonBasicTestFixture');
    assert.equal(element.prop1, 'ns-button');
    var elementShadowRoot = element.shadowRoot;
    var elementHeader = elementShadowRoot.querySelector('h2');
    assert.equal(elementHeader.innerHTML, 'Hello ns-button!');
  });

  test('setting a property on the element works', function() {
    // Create a test fixture
    var element = fixture('nsButtonChangedPropertyTestFixture');
    assert.equal(element.prop1, 'new-prop1');
    var elementShadowRoot = element.shadowRoot;
    var elementHeader = elementShadowRoot.querySelector('h2');
    assert.equal(elementHeader.innerHTML, 'Hello new-prop1!');
  });

});
