Prism.languages.arturo = {
	'comment': /;.*/,
	'character': {
		pattern: /`.`/,
		alias: 'function'
	},
	'string': {
        pattern: /"(?:[^"\\]|\\.)*"/,
        greedy: true,
        alias: 'function'
    },
	'label': {
        pattern: /[\w]+\b\??:/i,
        alias: 'builtin'
    },
    'literal': {
        pattern: /'(?:[\w]+\b\??:?)/,
        alias: 'boolean'
    },
	'predicate': {
        pattern: /(?<!')\b(?:all|and|any|ascii|attr|attribute|attributeLabel|binary|block|boolean|char|contains|database|date|dictionary|empty|equal|even|every|exists|false|floating|function|greater|greaterOrEqual|if|in|inline|integer|is|key|label|leap|less|lessOrEqual|literal|lower|nand|negative|nor|not|notEqual|null|numeric|odd|or|path|pathLabel|positive|prefix|prime|set|some|standalone|string|subset|suffix|superset|symbol|true|try|type|upper|when|whitespace|word|xnor|zero)\?(?!:)/,
        alias: 'keyword'
    },
    'builtin': {
        pattern: /(?<!')\b(?:abs|acos|acosh|add|and|append|arg|arity|array|as|asin|asinh|atan|atanh|attr|attrs|average|benchmark|break|builtins1|builtins2|call|capitalize|case|ceil|chop|clear|close|color|combine|continue|cos|cosh|csec|csech|ctan|ctanh|cursor|dec|decode|define|dictionary|difference|digest|div|do|download|drop|dup|else|empty|encode|ensure|env|epsilon|execute|exit|exp|extend|extract|factors|false|fdiv|filter|first|flatten|floor|fold|from|function|gamma|gcd|get|globalize|goto|hash|help|if|inc|index|info|input|insert|inspect|intersection|join|keys|last|let|levenshtein|list|ln|log|loop|lower|mail|map|match|max|median|min|mod|module|mul|nand|neg|new|nor|not|now|null|open|or|pad|panic|path|pause|permutate|pi|pop|pow|prefix|print|prints|product|query|random|range|read|relative|remove|render|repeat|replace|return|reverse|round|sample|sec|sech|select|serve|set|shl|shr|shuffle|sin|sinh|size|slice|sort|split|sqrt|squeeze|stack|strip|sub|suffix|sum|symbols|sys|take|tan|tanh|terminal|to|true|truncate|try|type|union|unique|until|unzip|upper|values|var|webview|while|with|write|xnor|xor|zip)\b(?!:)/,
        alias: 'keyword'
    },
    'sugar': {
        pattern: /\->|=>|\||\:\:/,
        alias: 'important'
    },
    'symbol': {
        pattern: /<\:|\-\:|ø|@|#|\+|\||\*|\$|\-|\%|\/|\.\.|\^|~|=|<|>|\\|\-\-\-/,
        alias: 'tag'
    }
};

Prism.languages.art = Prism.languages['arturo'];