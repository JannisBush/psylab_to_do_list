document.getElementsById("bt").onclick = createBulletPoint(){
		 					     var text, list;
		 					     text = tf.value
						 	     list = document.getElementsByClassName("list")
		 					     var li = document.createElement("li");
  							     li.appendChild(document.createTextNode(text));
							     list.appendChild(li)
							     }
