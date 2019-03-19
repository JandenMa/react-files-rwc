module.exports = {
    'plugins': [
      [
        'import', [
        {'libraryName': 'antd', 'libraryDirectory': 'es', 'style': true},
        {
          'libraryName': 'components',
          'camel2DashComponentName': false,
          'customName': name => `../${name}`, // 这里的customName可以是一个函数，定义如何转化文件路径
          'style': true,
        },
      ]
      ]
    ]
  };
  