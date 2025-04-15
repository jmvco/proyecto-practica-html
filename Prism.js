/* Prism.js - Color en el código */
code[class*="language-"],
pre[class*="language-"] {
    color: #f8f8f2;
    background: none;
    text-shadow: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    line-height: 1.5;
    tab-size: 4;
    word-wrap: normal;
}

pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 5px;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
    color: #7f8c8d;
}

.token.punctuation {
    color: #f1c40f;
}

.token.tag {
    color: #e74c3c;
}

.token.attr-name {
    color: #8e44ad;
}

.token.attr-value {
    color: #2ecc71;
}

.token.keyword {
    color: #3498db;
}

.token.selector {
    color: #9b59b6;
}

.token.property {
    color: #f39c12;
}

.token.function {
    color: #e67e22;
}

.token.boolean,
.token.number,
.token.constant,
.token.symbol {
    color: #1abc9c;
}

.token.deleted {
    color: #e74c3c;
}

.token.inserted {
    color: #2ecc71;
}

.token.important,
.token.bold {
    font-weight: bold;
}

.token.italic {
    font-style: italic;
}

.token.entity {
    cursor: help;
}

/* Para evitar el subrayado de correcciones */
textarea {
    spellcheck: false;
}
