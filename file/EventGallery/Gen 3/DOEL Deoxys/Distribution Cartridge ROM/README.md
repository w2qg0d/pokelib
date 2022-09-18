## Pokemon Doel Deoxys Distribution Cartridge  GBA ROM

**About the Doel Deoxys Distribution Cartridge**

The Doel Deoxys was distributed at the TV Toy Museum in the Netherlands during the Pokemon Fan Days 2006 from May 25 to 28, 2006 to celebrate the release of Destiny Deoxys (Doel Deoxys).  
  
So what do we have here? Well this is a rom dump of the Doel Deoxys event distribution used in the TV Toy over in the Netherlands. You can use this to distribute yourself your own legitimate Doel Deoxys exactly as if you had attended one of the Doel Deoxys distributions over 13 years ago back in 2006.

**Technical Info**
  
The Dole Deoxys distribution is quite unique compared to other Pokemon Gen 3 distributions we have managed to release.  
  
The rom is hardcoded with 1 January 2006 - 4 June 2006 as the allowed distribution period. However it's not programmed with variables that are simply modified to change the dates to anything of your choice like with the NDS roms, rather a function that first checks if Year is 6 (2006). If so, then it checks if Month is lower than or equal to 5 (May), and if greater than 5, it checks if Month is 6 (June) and if so, it checks if Day is greater than 4 (June 4). Therefore, allowing 2006/01/01 - 2006/06/04. Of course you can modify the function, but it isn't as straightforward or practical as changing variables to set any dates you want.  
  
That being said, the Edit Mode we found hidden in 10ANNIV is completely missing from Doel, so clearly the time/dates weren't set that way as we had previously assumed. We're speculating it was perhaps used for the Japanese GCEA/GMPC events, which 10ANNIV rom is a deviation of. The six campaigns of GCEA/GMPC and six date slots in Edit Mode may hint all campaigns were in one rom, and activated according to dates in Edit Mode, which made it easily modifiable when/if needed. This Doel rom is clearly very unpolished in comparison to the others, making it obvious to be an early translation and variant of one of the Japanese distro roms, so not as closely related to 10ANNIV as previously thought. We discovered the truth is that it's actually, literally, an American rom when it comes down to it. The American roms were first localized from a Japanese rom, and the European roms were later localized from the American roms. This Doel rom was Europe's first unique Gen 3 event, so when they modified it to distribute Doel, that's basically all they changed from the American source rom. Later events are when they localized it more to the appearance of what we see with 10ANNIV and Aura Mew.  
  
How the RTC was originally calibrated for the cart to believe it was between 1 January and 4 June 2006, we can't say for certain, since there's no way to input a current time/date and the fact the GBA has no internal RTC like a DS. It definitely needs to read an RTC to function unmodified. Which is how I got it to work on an emulator at least. Just temporarily set your PC clock/date within the allowed distribution period. So for practical use these days, if you want to use it on real hardware, it is a definite that rom requires modification. That's easy though, just 00-out 0xB2C to 0xB37 in the rom hex, and it kills the date check function I described above. It would honestly be more convenient to use the edited rom with emulators as well.  
  
The only logical guess is that the RTC was calibrated automatically by the software that originally wrote the rom on the proto/devcart. We believe this is the case since it would've been the most convenient. Other theories are that maybe they inserted the distribution cart in a NDS (this was 2006) with special a NDS software to feed RTC into the save data of the Doel cart, or connected to some sort of external hardware. Those are really terrible methods, but it's literally all I could imagine if it weren't automatically calibrated upon writing to the cart. We'll likely never know for sure, but that's the general idea.

**Credits**
  
This release was made possible with significant financial contributions from the following people, without them this distribution wouldn't have been preserved for us all to enjoy today:  

- ajxpk
- bromario56
- Deoxyz
- Gridelin
- InsaneNutter
- Invader TAK
- north13
- thaleskpl
- theskipster
- theSlayer
- UndeadxReality
- YoshiMoshi

In addition the following community members contributed to this release though event knowledge and research:  

- King Impoleon
- fabio00
- Sabresite

**Distributing the Doel Deoxys**

  The Doel Deoxys can be distributed on both emulators and real hardware. However to distribute on real hardware you will need to use the modified version of the distribution **Doel Deoxys (No Date).gba**  
  
This modified version is the original rom with the date requirement check removed as detailed in the technical information above.  
  
On an emulator you can either use the original **Doel Deoxys.gba** rom or the version with the date check removed. To use the original unmodified version the date on your PC must set within the allowed distribution period of 1 January 2006 - 4 June 2006.

**Equipment Required**

- 2x GBA's
- 1x link cable (The official Nintendo cable works, 3rd party cables might not work)
- 1x Distribution Cart (This is what we have the rom of) so you can use a GBA Flash Card
- 1x Pokemon Ruby, Sapphire, Emerald, LeafGreen, FireRed cart which matches the language of the distribution you are using.

**Procedure**  

1. Save your Pokemon Ruby, Sapphire, Emerald, LeafGreen, FireRed game and have at least 1 free slot in your party (the more free slots you have, the more Doel Deoxys you can distribute)
2. Turn off the GBA with your Pokemon Game in
3.  Turn on the GBA with the distribution cart inside. (It is presumed that you know how to write and load the Doel Deoxys distribution rom to the flashcard you own)
4. Connect your GBA link cable to the GBA with the Doel Deoxys distribution in and the GBA with the Pokemon game in which will receive the Doel Deoxys
5. Turn on the GBA with your Pokemon game in which will receive the Doel Deoxys, holding Start and Select to enter Multiboot mode.
6. After a couple seconds you’ll see a coloured Nintendo logo appearing on the GBA which is going to recicve the Doel Deoxys.
7. You’ll see a screen that tells you a Pokemon is being received, after this has finished the Doel Deoxys will be in your party.
8. Now turn off the GBA which received the Doel Deoxys, turn it on again as normal and load your save game. You will find Doel Deoxys in your party.