import hljs from "highlight.js";

hljs.configure({ languages: ['javascript', 'python'] });

export const formats = [
  'font',
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'align',
  'color',
  'background',
  'size',
  'h1',
];

export const editorModules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ align: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ font: ['serif', 'sans-serif', 'monospace'] }],
      [
        {
          color: [

          ],
        },
        { background: [] },
        ['clean'],
      ],
    ],
  },
  syntax: {
    highlight: (text: string) => hljs.highlightAuto(text).value,
  },
};