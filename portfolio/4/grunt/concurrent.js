module.exports = {

  // Настройки задач
  options: {
    limit: 4
  },

  // Задачи для разработки
  devFirst: [
  // 'jshint',
  'concat',
  'compass:dev',
  ],
  devSecond: [
  'cssmin',
  'uglify'
  ],

  // Задачи для продакшна
  prodFirst: [
  // 'jshint',
  'concat',
  'compass:prod',
  ],
  prodSecond: [
  'cssmin',
  'uglify'
  ]
};