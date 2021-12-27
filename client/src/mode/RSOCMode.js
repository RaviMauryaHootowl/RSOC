import 'brace/mode/text';

export class CustomHighlightRules extends window.ace.acequire("ace/mode/text_highlight_rules").TextHighlightRules {
	constructor() {
		super();
		this.$rules = {
			"start" : [
                {
                    token : "comments",
                    regex : /^~.*$/
                },
                {
                    token : "tags",
                    regex : /:.*$/
                },
                {
                    token : "commands",
                    regex : /(?:SET|ADD|SUB|MUL|DIV|INR|DCR|SHOW|IFG|IFL|IFE|IFN|JUMP|SKIP)\b/,
                    caseInsensitive: true
                },
                {
                    token : "numbers",
                    regex : /[0-9]+\b/,
                }
            ]
		};
	}
}

export default class RSOCMode extends window.ace.acequire('ace/mode/text').Mode {
	constructor() {
		super();
		this.HighlightRules = CustomHighlightRules;
	}
}