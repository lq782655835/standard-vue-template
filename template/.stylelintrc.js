module.exports = {
    plugins: ['stylelint-scss'],
    extends: [
        'stylelint-config-standard',
        'stylelint-config-prettier', // 解决与prettier冲突
        'stylelint-config-idiomatic-order' // 扩展的推荐属性顺序(autofix)
    ],
    rules: {
        'at-rule-no-unknown': null, // 允许scss的类似@include @if的规则
        'selector-max-id': 0, // 不允许使用id选择器
        'no-extra-semicolons': true, // 不允许多余分号（autofix）
        'declaration-block-trailing-semicolon': 'always', // 声明尾部分号(autofix)
        'declaration-block-semicolon-newline-after': 'always', // 分号后必须另起一行(autofix)
        'declaration-colon-space-after': 'always', // 属性分号后空格(autofix)
        'indentation': 4, // 缩进(autofix)
        'selector-class-pattern': '[a-z]',
        'number-leading-zero': 'always', // 小数点前填充0(autofix)
        'color-hex-case': 'lower', // hex颜色小写(autofix)
        'string-quotes': 'single' // 单引号(autofix)
    }
}
