#
# A simple Makefile
#

######

PATSCC=$(PATSHOME)/bin/patscc
PATSOPT=$(PATSHOME)/bin/patsopt

######

all::
regress::
cleanall::

######

all:: mylist0
regress:: mylist0; ./$<
cleanall:: ; $(RMF) mylist0

#######

all:: show_triangle
regress:: show_triangle; ./$<
cleanall:: ; $(RMF) show_triangle

#######
#
# This rule is for compiling single-file programs
#
%: %.dats ; $(PATSCC) -O2 -D_GNU_SOURCE -DATS_MEMALLOC_LIBC -o $@ $<
#
#######

testall:: all
testall:: regress
testall:: cleanall

#######

RMF=rm -f

#######

clean:: ; $(RMF) *~
clean:: ; $(RMF) *_?ats.c
clean:: ; $(RMF) *_?ats.o

#######

cleanall:: clean

#######	end of [Makefile] ######
