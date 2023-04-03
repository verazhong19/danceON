const toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
      {
        "kind": "block",
        "type": "controls_if"
      },
      {
        "kind" : "block",
        "type" : "logic_compare"
      },
      {
        "kind": "block",
        "type": "controls_repeat_ext"
      },
      {
        "kind": "block",
        "type": "math_number",
        "fields": {
          "NUM": 123
        }
      },
      {
        "kind": "block",
        "type": "math_arithmetic"
      },
      {
        "kind": "block",
        "type": "text"
      },
      {
        "kind" : "block",
        "type" : "text_print"
      }
    ]
  };

  var workspace = Blockly.inject('blocklyDiv',
      {media: 'https://unpkg.com/blockly/media/',
       toolbox: toolbox});
  function updateCode(event){
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  // var codeHolder = document.getElementById('editor');
  // codeHolder.innerHTML = '';  // Delete old code.
  // codeHolder.appendChild(document.createTextNode(code));
  editor.setValue(code);
  }
  workspace.addChangeListener(updateCode);