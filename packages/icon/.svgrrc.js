module.exports = {
  typescript: true,
  icon: true,
  template: (variables, { tpl }) => {
    return tpl`
    ${variables.imports};

    ${variables.interfaces};

    export default function ${variables.componentName} (${variables.props}): JSX.Element {
        return ${variables.jsx};
      }
    `
  },
}
