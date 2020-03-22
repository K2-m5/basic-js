module.exports = function createDreamTeam(members) {
  let dreamTeam=[];
  if (Array.isArray(members)) {
    for(let member of members) {
      if( typeof member ==="string") {
        dreamTeam.push(member.trim()[0].toUpperCase());
      }
    }
    return dreamTeam.sort().join("");
  } else return false;
};