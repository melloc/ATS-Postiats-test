######
#
# A simple Makefile
#
######

PATSCC=$(PATSHOME)/bin/patscc
PATSOPT=$(PATSHOME)/bin/patsopt

######

all:: fibo_dats
regress:: fibo_dats; ./$<
cleanall:: ; rm -f fibo_dats

######

testall:: all regress cleanall

######

clean:: ; rm -f *~
clean:: ; rm -f *_dats.o
clean:: ; rm -f *_dats.c

cleanall:: clean
cleanall:: ; rm -f fibo_dats

######

%_dats: %.dats; $(PATSCC) -o $@ $<

###### end of [Makefile] ######
