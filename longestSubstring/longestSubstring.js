function longestSubstring(s) {
  if (s.length < 2) {
    return s.length;
  }

  let longestString = 0;
  let set = new Set();

  let left = 0,
    right = 0;

  while (right < s.length) {
    let letter = s[right];

    if (!set.has(letter)) {
      set.add(letter);
      longestString = Math.max(longestString, set.size);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }

  return longestString;
}

module.exports = longestSubstring;

//Given a string s, find the length of the longest substring without repeating characters.
