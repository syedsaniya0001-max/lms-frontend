import React from "react";
function Home(){
    return(
        <>
{/*        
    <div class="class">
    
    <h1>Library Management System</h1>
    </div>
   */}
    <nav>
       
        <div class="links" style="color: aliceblue;">
        <a href="#" target="_self">Home                                 </a>
        <a href="About.html" target="_self">About                                 </a>
        <a href="Contact.html" target="_self">Contact Us                                 </a>
        <a href="new_arrivals.html" target="_self">New Arrivals                                 </a>
        <a href="Help.html" target="_self">Help                                 </a>
        </div>

        <div class="login" id="login">
            <a href="logins.html" class="btn" style="text-decoration: none;" target="_blank" >Login</a>
            </div>
    </nav>
    <section>
    <article>
        <div class="same">
        <div class="container">
        <h2 style="color:#1e40af">What is Library?</h2>
        
       
        <p>A library is a knowledge center where information is collected, organized, and preserved for learning and research. It is a quiet space that encourages reading, thinking, and discovery.

A library not only stores books but also provides access to digital resources, journals, and study materials, helping people expand their knowledge and improve their skills.</p>
</div>
</div>
 
   
        <h2 style="text-align: left;text-decoration: underline;color:#1e40af;">Famous Authors</h2>


        <div class="same">
        <h3>1. William Shakespeare</h3>
        <p>
William Shakespeare was an English playwright and poet, widely regarded as one of the greatest writers in the English language. His famous works include Hamlet, Macbeth, and Romeo and Juliet. His writings explore themes of love, power, betrayal, and human nature.
            
        </p>
        </div>



        <div class="same">
        <h3>2. J.K. Rowling</h3>
        <p>
            J.K. Rowling is a British author best known for writing the Harry Potter series. Her books combine fantasy, adventure, and moral lessons, inspiring millions of readers around the world.
        </p>
        </div>



        <div class="same">
        <h3>3. Rabindranath Tagore</h3>
        <p>
            Rabindranath Tagore was an Indian poet, philosopher, and writer. He became the first non-European to win the Nobel Prize in Literature. His works focus on spirituality, humanity, and cultural values.
        </p>
        </div>



        <div class="same">
        <h4>4. Dr. A.P.J. Abdul Kalam</h4>
        <p>
            Dr. A.P.J. Abdul Kalam was an Indian scientist and the 11th President of India. He wrote inspiring books like Wings of Fire, motivating young people to dream big and achieve success.
        </p>
        </div>
    </article>
    </section>
    <footer>

        <h3 style="color:white;">“Unlock the world of wisdom with your <a href="#login" target="_blank" style="color:bisque;">login</a>”</h3>
    </footer>
        </>



    )
}
export default Home