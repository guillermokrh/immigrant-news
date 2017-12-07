/*
Alligator
Armadillo
Cheetah
Dinosaur
Elephant
Kangaroo
Monkey
Panda
Rhino
Wolverine
*/


var storyRef = firebase.database().ref("stories/");
storyRef.update ({
  "story1" : {
    "comments" : {
      "comment1" : {
        "text" : "Hopefully things work out",
        "user" : "Armadillo"
      },
      "comment2" : {
        "text" : "I'm sorry that this happened to you",
        "user" : "Cheetah"
      },
      "comment3" : {
        "text" : "Yeah...just be careful!",
        "user" : "Alligator"
      }
    },
    "date" : "October 17, 2017",
    "description" : "I was at Los Angeles International Airport and immigration authorities were randomly checking random travelers' US visas and immigration documents",
    "images" : {
      "image1" : "/img/photo1.jpeg"
    },
    "location" : "Los Angeles, CA",
    "title" : "LAX - Random document checks",
    "user" : "Alligator",
    "validations" : {
      "validation1" : {
        "reason" : "I saw this happen",
        "user" : "Armadillo",
        "vote" : "valid"
      },
      "validation2" : {
        "reason" : "This is inaccurate",
        "user" : "Cheetah",
        "vote" : "invalid"
      },
      "validation3" : {
        "reason" : "I saw this happen",
        "user" : "Wolverine",
        "vote" : "valid"
      },
      "validation4" : {
        "reason" : "This happened to a friend of mine",
        "user" : "Dinosaur",
        "vote" : "valid"
      }
    }
  }
});

var storyRef = firebase.database().ref("stories/");
storyRef.update ({
  "story2" : {
    "comments" : {
      "comment1" : {
        "text" : "Oh no! I'm sorry that this happened to your friend.",
        "user" : "Monkey"
      },
      "comment2" : {
        "text" : "I know, I can't believe it. I'm so sad...",
        "user" : "Alligator"
      },
        "comment3" : {
        "text" : "Thanks for sharing, I'll let my Chicago friends know.",
        "user" : "Panda"
      }
    },
    "date" : "November 5, 2017",
    "description" : "I work at this factory in Chicago and I.C.E. agents showed up looking for another employee who didn't show up to a court hearing, but before leaving I guess they started asking other employees their immigration status because they asked my friend. He was honest with them and said he was undocumented...so they arrested him on the spot and took him. Everyone should just be cautious...",
    "images" : {
    },
    "location" : "Chicago, IL",
    "title" : "Chicago - ICE randomly checking employee immigration status at factory",
    "user" : "Alligator",
    "validations" : {
      "validation1" : {
        "reason" : "I saw this happen",
        "user" : "Armadillo",
        "vote" : "valid"
      },
      "validation2" : {
        "reason" : "This happened to a friend of mine",
        "user" : "Cheetah",
        "vote" : "valid"
      },
      "validation3" : {
        "reason" : "Other",
        "user" : "Wolverine",
        "vote" : "valid"
      }
    }
  }
});

var storyRef = firebase.database().ref("stories/");
storyRef.update ({
  "story3" : {
    "comments" : {
      "comment1" : {
        "text" : "What are you talking about?! There's no school there!",
        "user" : "Monkey"
      },
      "comment2" : {
        "text" : "That really happened?!?",
        "user" : "Alligator"
      }
    },
    "date" : "December 6, 2017",
    "description" : "There was an immigration raid at the high school on Fake Ave. and Notreal St. to take any undocumented students...",
    "images" : {
    },
    "location" : "Chicago, IL",
    "title" : "Chicago High School - Immigration Raid",
    "user" : "Cheetah",
    "validations" : {
      "validation1" : {
        "reason" : "This did not happen",
        "user" : "Monkey",
        "vote" : "invalid"
      },
      "validation2" : {
        "reason" : "This is inaccurate",
        "user" : "Wolverine",
        "vote" : "invalid"
      },
      "validation3" : {
        "reason" : "Other",
        "user" : "Alligator",
        "vote" : "invalid"
      }
    }
  }
});

var storyRef = firebase.database().ref("stories/");
storyRef.update ({
  "story4" : {
    "comments" : {
      "comment1" : {
        "text" : "That didn't happen! You just copied the story from LAX!",
        "user" : "Alligator"
      }        
    },
    "date" : "November 29, 2017",
    "description" : "I was at O'hare today and ICE agents were randomly checking traveler immigration documents and arresting undocumented immigrants.",
    "images" : {
    },
    "location" : "Chicago, IL",
    "title" : "O'Hare Airport - ICE randomly checking traveler immigration documents",
    "user" : "Cheetah",
    "validations" : {
      "validation1" : {
        "reason" : "This did not happen",
        "user" : "Monkey",
        "vote" : "invalid"
      },
      "validation2" : {
        "reason" : "This is inaccurate",
        "user" : "Wolverine",
        "vote" : "invalid"
      },
      "validation3" : {
        "reason" : "This did not happen",
        "user" : "Alligator",
        "vote" : "invalid"
      }
    }
  }
});



// ****************** ALL STORIES **************************
{
  "story1" : {
    "comments" : {
      "comment1" : {
        "text" : "Hopefully things work out",
        "user" : "Armadillo"
      },
      "comment2" : {
        "text" : "I'm sorry that this happened to you",
        "user" : "Cheetah"
      },
      "comment3" : {
        "text" : "Yeah...just be careful!\"",
        "user" : "Alligator"
      }
    },
    "date" : "October 17, 2017",
    "description" : "I was at Los Angeles International Airport and immigration authorities were randomly checking random travelers' US visas and immigration documents",
    "images" : {
      "image1" : "/img/photo1.jpeg"
    },
    "location" : "LAX",
    "title" : "LAX - Random document checks",
    "user" : "Alligator",
    "validations" : {
      "validation1" : {
        "reason" : "I saw this happen",
        "user" : "Armadillo",
        "vote" : "valid"
      },
      "validation2" : {
        "reason" : "This is inaccurate",
        "user" : "Cheetah",
        "vote" : "invalid"
      },
      "validation3" : {
        "reason" : "I saw this happen",
        "user" : "Wolverine",
        "vote" : "valid"
      },
      "validation4" : {
        "reason" : "This happened to a friend of mine",
        "user" : "Dinosaur",
        "vote" : "valid"
      }
    }
  },
  "story10" : {
    "comments" : {
      "comment1" : {
        "text" : "I'll pray for all the people in danger there...",
        "user" : "Alligator"
      },
      "comment2" : {
        "text" : "I can't believe they're doing that",
        "user" : "Cheetah"
      },
      "comment3" : {
        "text" : "All they need is a reason!",
        "user" : "Panda"
      },
      "comment4" : {
        "text" : "This is true, check out https://www.snopes.com/immigrants-california-wildfires/",
        "user" : "Elephant"
      }
    },
    "date" : "October 19, 2017",
    "description" : "A series of articles try fervently to blame immigrants and Muslims for the devastating fires -- falsely, misleadingly, and without evidence. Two immigrants -- one Mexican and one Iranian -- were arrested for starting the October 2017 California wildfires.",
    "location" : "Ventura Police Department",
    "title" : "No evidence - Immigrants Arrested for Starting California Wildfires",
    "user" : "Alligator",
    "validations" : {
      "validation1" : {
        "reason" : "Other",
        "user" : "Armadillo",
        "vote" : "valid"
      },
      "validation2" : {
        "reason" : "This happened to a friend of mine",
        "user" : "Alligator",
        "vote" : "valid"
      },
      "validation3" : {
        "reason" : "Other",
        "user" : "Kangaroo",
        "vote" : "valid"
      },
      "validation4" : {
        "reason" : "This happened to a friend of mine",
        "user" : "Dinosaur",
        "vote" : "valid"
      },
      "validation5" : {
        "reason" : "This happened to a friend of mine",
        "user" : "Panda",
        "vote" : "valid"
      },
      "validation6" : {
        "reason" : "Other",
        "user" : "Rhino",
        "vote" : "valid"
      },
      "validation7" : {
        "reason" : "This happened to a friend of mine",
        "user" : "Cheetah",
        "vote" : "valid"
      }
    }
  },
  "story2" : {
    "comments" : {
      "comment1" : {
        "text" : "Oh no! I'm sorry that this happened to your friend.",
        "user" : "Monkey"
      },
      "comment2" : {
        "text" : "I know, I can't believe it. I'm so sad...",
        "user" : "Alligator"
      },
      "comment3" : {
        "text" : "Thanks for sharing, I'll let my Chicago friends know.",
        "user" : "Panda"
      }
    },
    "date" : "November 5, 2017",
    "description" : "I work at this factory in Chicago and I.C.E. agents showed up looking for another employee who didn't show up to a court hearing, but before leaving I guess they started asking other employees their immigration status because they asked my friend. He was honest with them and said he was undocumented...so they arrested him on the spot and took him. Everyone should just be cautious...",
    "location" : "Lawrence's Fisheries",
    "title" : "Chicago - ICE randomly checking employee immigration status at factory",
    "user" : "Alligator",
    "validations" : {
      "validation1" : {
        "reason" : "I saw this happen",
        "user" : "Armadillo",
        "vote" : "valid"
      },
      "validation2" : {
        "reason" : "This happened to a friend of mine",
        "user" : "Cheetah",
        "vote" : "valid"
      },
      "validation3" : {
        "reason" : "Other",
        "user" : "Wolverine",
        "vote" : "valid"
      }
    }
  },
  "story3" : {
    "comments" : {
      "comment1" : {
        "text" : "What are you talking about?! There's no school there!",
        "user" : "Monkey"
      },
      "comment2" : {
        "text" : "That really happened?!?",
        "user" : "Alligator"
      }
    },
    "date" : "December 6, 2017",
    "description" : "There was an immigration raid at the high school on Fake Ave. and Notreal St. to take any undocumented students...",
    "location" : "Paul Robeson High School",
    "title" : "Chicago High School - Immigration Raid",
    "user" : "Cheetah",
    "validations" : {
      "validation1" : {
        "reason" : "This did not happen",
        "user" : "Monkey",
        "vote" : "invalid"
      },
      "validation2" : {
        "reason" : "This is inaccurate",
        "user" : "Wolverine",
        "vote" : "invalid"
      },
      "validation3" : {
        "reason" : "Other",
        "user" : "Alligator",
        "vote" : "invalid"
      }
    }
  },
  "story4" : {
    "comments" : {
      "comment1" : {
        "text" : "That didn't happen! You just copied the story from LAX!",
        "user" : "Alligator"
      }
    },
    "date" : "November 29, 2017",
    "description" : "I was at O'hare today and ICE agents were randomly checking traveler immigration documents and arresting undocumented immigrants.",
    "location" : "ORD",
    "title" : "O'Hare Airport - ICE randomly checking traveler immigration documents",
    "user" : "Cheetah",
    "validations" : {
      "validation1" : {
        "reason" : "This did not happen",
        "user" : "Monkey",
        "vote" : "invalid"
      },
      "validation2" : {
        "reason" : "This is inaccurate",
        "user" : "Wolverine",
        "vote" : "invalid"
      },
      "validation3" : {
        "reason" : "This did not happen",
        "user" : "Alligator",
        "vote" : "invalid"
      }
    }
  },
  "story5" : {
    "date" : "November 28, 2017",
    "description" : "Cloverhill Bakery on the Northwest Side, lost more than a third of its employees during an immigration raid, about 800 didn’t have sufficient documentation.",
    "images" : {
      "image1" : "/img/ChicagoBakery.jpeg"
    },
    "location" : "Aryzta Bakeries",
    "title" : "Immigration raid - Chicago bakery loses 800",
    "user" : "Alligator"
  },
  "story6" : {
    "date" : "December 6, 2017",
    "description" : "Messages began circulating via e-mail and text messaging claiming that WalMart had authorized U.S. law enforcement (the Border Patrol and/or Immigration and Customs Enforcement) to enter its stores and arrest any illegal immigrants found within. Some messages have tied this action to efforts by Latino groups to organize a boycott of Walmart for a month (beginning on 20 March 2010) as a “call for the world’s biggest retailer to adopt a favorable position vis-a-vis immigration reform.” Various sources have claimed that the messages about immigration raids at WalMart stores are either spurious rumors intended to promote the boycott or a scare tactic being used by WalMart to thwart the boycott.",
    "images" : {
      "image1" : "/img/walmart.jpeg"
    },
    "location" : "Bakersfield, CA",
    "title" : "Walmart Immigration Raids",
    "user" : "Alligator"
  },
  "story7" : {
    "date" : "December 1, 2017",
    "description" : "As part of his plan to improve national security and combat illegal immigration, US President Donald Trump intends to send around 3 million American Indians back to where they came from — India. He is to sign an executive order to this effect this week.",
    "location" : "Dallas, TX",
    "title" : "Trump sends order to deport native americans in Texas",
    "user" : "Cheetah"
  },
  "story8" : {
    "date" : "October 1, 2017",
    "description" : "In the days leading up to Tung Nguyen’s check-in with immigration officials in October, he couldn’t eat, couldn’t sleep and couldn’t concentrate at work.",
    "location" : "New York Immigration Services",
    "title" : "Some Vietnamese immigrants were protected from deportation",
    "user" : "Elephant",
    "validations" : {
      "validation1" : {
        "reason" : "This happened to my friend",
        "user" : "Alligator",
        "vote" : "valid"
      }
    }
  },
  "story9" : {
    "comments" : {
      "comment1" : {
        "text" : "That's too bad",
        "user" : "Alligator"
      },
      "comment2" : {
        "text" : "Why would they do that?",
        "user" : "Alligator"
      },
      "comment3" : {
        "text" : "My friend is in one of those!",
        "user" : "Kangaroo"
      }
    },
    "date" : "December 10, 2017",
    "description" : "Several groups are suing the U.S. Department of Homeland Security for failing to provide documents regarding an Alabama immigrant detention center. The lawsuit was filed in federal court Wednesday. The Adelante Alabama Worker Center, Detention Watch Network, Greater Birmingham Ministries, Immigrant Defense Project and Southerners on New Ground were named as plaintiffs; the defendants were named as the DHS and the Office for Civil Rights and Civil Liberties.",
    "images" : {
      "image1" : "/img/alabamadetentioncenter.jpg"
    },
    "location" : "Etowah County Jail",
    "title" : "DHS Hiding Info about Detention Center",
    "user" : "Dinosaur",
    "validations" : {
      "validation1" : {
        "reason" : "Other",
        "user" : "Armadillo",
        "vote" : "valid"
      },
      "validation2" : {
        "reason" : "This happened to a friend of mine",
        "user" : "Alligator",
        "vote" : "valid"
      },
      "validation3" : {
        "reason" : "Other",
        "user" : "Kangaroo",
        "vote" : "valid"
      },
      "validation4" : {
        "reason" : "This happened to a friend of mine",
        "user" : "Dinosaur",
        "vote" : "valid"
      }
    }
  }
}