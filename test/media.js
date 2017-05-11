// external tooling
import test from "ava"

// internal tooling
import compareFixtures from "./helpers/compare-fixtures"

test("should resolve media queries of import statements", t => {
  return compareFixtures(t, "media-import")
})

test("should resolve media queries", t => {
  return compareFixtures(t, "media-query")
})

test("should resolve content inside import with media queries", t => {
  return compareFixtures(t, "media-content")
})

test("should join correctly media queries", t => {
  return compareFixtures(t, "media-join")
})
