1.2.0 / 2017-10-02
==================

  * Chore - Support React 16. #2

1.1.1 / 2016-12-20
==================

  * Documentation - Use the right syntax highlighting for the example.

1.1.0 / 2016-12-08
==================

  * Documentation - Implement proper documentation site using `react-styleguidist`.
  * Feature - Allow `onToggleColumn` to be optional. This worked out better with `react-styleguidist`.

1.0.0 / 2016-11-27
==================

  * Initial re-release under a different name and an improved API.
  * Bug fix - Show a visibility toggle only for those columns that have `header` defined.
  * Breaking - Generalize `onToggleColumn`. It's `onToggleColumn({ column, columnIndex })` now instead of `onToggleColumn(columnIndex)`. This way it works with data not depending on index.
  * Feature - Expose `isVisible(column)`. It checks `column.visible` by default. You can override the default behavior through this prop.

---

## reactabular-visibility-toggles

2.0.0 / 2016-08-16
==================

  * Initial release.

