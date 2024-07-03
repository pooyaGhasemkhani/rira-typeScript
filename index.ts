enum ButtonKey {
    ButtonA = 1,
    ButtonB = 2,
    ButtonC = 3,

}
  

  interface Button {
    key: ButtonKey;
    label: string;

}
  

  const buttons: Button[] = [
    { key: ButtonKey.ButtonA, label: "Button A" },
    { key: ButtonKey.ButtonB, label: "Button B" },
    { key: ButtonKey.ButtonC, label: "Button C" },

];
  

  function getSelectedButtons(selectedKeys: ButtonKey[]): Button[] {
    return buttons.filter((button) => selectedKeys.includes(button.key));
  }
  

  const selectedButtonKeys: ButtonKey[] = [ButtonKey.ButtonA, ButtonKey.ButtonC];
  const selectedButtons = getSelectedButtons(selectedButtonKeys);
  
  console.log(selectedButtons); 
  